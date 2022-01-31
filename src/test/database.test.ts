import {
  getTeacherWithStudents,
  getTeacherWithStudentsWithFavoriteTeacher,
} from '../database';
import { performance } from 'perf_hooks';
import * as matchers from 'jest-extended';

expect.extend(matchers);

describe('database', () => {
  it('should return the proper data', async () => {
    const teacherWithStudents = await getTeacherWithStudents();

    expect(teacherWithStudents).toEqual({
      id: 1,
      name: expect.toBeString(),
      students: expect.anything(),
    });

    expect(typeof teacherWithStudents.name).toEqual('string');

    expect(teacherWithStudents.students).toEqual([
      {
        id: 1,
        name: expect.toBeString(),
      },
      {
        id: 2,
        name: expect.toBeString(),
      },
      {
        id: 3,
        name: expect.toBeString(),
      },
      {
        id: 5,
        name: expect.toBeString(),
      },
      {
        id: 8,
        name: expect.toBeString(),
      },
    ]);
  });

  it('should return the proper data for withFavoriteTeacher', async () => {
    const teacherWithStudents =
      await getTeacherWithStudentsWithFavoriteTeacher();

    expect(teacherWithStudents).toEqual({
      id: 1,
      name: expect.toBeString(),
      students: expect.anything(),
    });

    expect(typeof teacherWithStudents.name).toEqual('string');

    expect(teacherWithStudents.students).toEqual([
      {
        favoriteTeachers: [
          {
            id: expect.toBeNumber(),
            name: expect.toBeString(),
            students: [1, 2, 3, 5, 8],
          },
        ],
        id: 1,
        name: expect.toBeString(),
      },
      {
        favoriteTeachers: [
          {
            id: expect.toBeNumber(),
            name: expect.toBeString(),
            students: [1, 2, 3, 5, 8],
          },
        ],
        id: 2,
        name: expect.toBeString(),
      },
      {
        favoriteTeachers: [
          {
            id: expect.toBeNumber(),
            name: expect.toBeString(),
            students: [1, 2, 3, 5, 8],
          },
        ],
        id: 3,
        name: expect.toBeString(),
      },
      {
        favoriteTeachers: [
          {
            id: expect.toBeNumber(),
            name: expect.toBeString(),
            students: [1, 2, 3, 5, 8],
          },
        ],
        id: 5,
        name: expect.toBeString(),
      },
      {
        favoriteTeachers: [
          {
            id: expect.toBeNumber(),
            name: expect.toBeString(),
            students: [1, 2, 3, 5, 8],
          },
        ],
        id: 8,
        name: expect.toBeString(),
      },
    ]);
  });

  it('should not take too long', async () => {
    const startTime = performance.now();
    await getTeacherWithStudentsWithFavoriteTeacher();
    const endTime = performance.now();

    expect(endTime - startTime).toBeLessThan(0.4);
  });
});
