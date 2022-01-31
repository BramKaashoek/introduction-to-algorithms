// Make the  "API endpoints" functions getTeacherWithStudents and GetTeacherWithStudentsWithFavoriteTeacher more efficient
// Feel free to edit the "database" functions or to add new DB functions
// If you add a 'DB' call, add an `await delay(100)` first, to keep things fair

export const getTeacherWithStudents = async () => {
  const teacher = await dbClient.teacher.getById(1);

  const teachersStudents: Student[] = [];

  for (let i = 0; i < teacher.students.length; i++) {
    teachersStudents.push(await dbClient.student.getById(teacher.students[i]));
  }

  return {
    ...teacher,
    students: teachersStudents.map((e) => {
      delete e.favoriteTeachers;
      return e;
    }),
  };
};

export const getTeacherWithStudentsWithFavoriteTeacher = async () => {
  const teacher = await dbClient.teacher.getById(1);

  const teachersStudents: Student[] = [];

  for (let i = 0; i < teacher.students.length; i++) {
    teachersStudents.push(await dbClient.student.getById(teacher.students[i]));
  }

  const favoriteTeachers: Teacher[][] = [];
  for (let i = 0; i < teachersStudents.length; i++) {
    favoriteTeachers.push(
      await Promise.all(
        teachersStudents[i].favoriteTeachers!.map((teacherId) =>
          dbClient.teacher.getById(teacherId)
        )
      )
    );
  }

  const teachersStudentsWithFavoriteTeacher = teachersStudents.map(
    (student, i) => ({ ...student, favoriteTeachers: favoriteTeachers[i] })
  );

  return { ...teacher, students: teachersStudentsWithFavoriteTeacher };
};

// feel free to change the objects for teacher and student.
const dbClient = {
  teacher: {
    getById: async (id: number): Promise<Teacher> => {
      await delay(100);

      return {
        id,
        name: (Math.random() + 1).toString(36).substring(7),
        students: [1, 2, 3, 5, 8],
      };
    },
  },

  student: {
    getById: async (id: number): Promise<Student> => {
      await delay(100);

      return {
        id,
        name: (Math.random() + 1).toString(36).substring(7),
        favoriteTeachers: [Math.round(Math.random() * 10000)],
      };
    },
  },
};

// Do not change below this line
type Student = { id: number; name: string; favoriteTeachers?: number[] };
type Teacher = { id: number; name: string; students: number[] };
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
