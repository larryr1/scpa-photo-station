import Dexie from 'dexie';

export const db = new Dexie('students');
db.version(1).stores({
  students: '++id, firstName, lastName, grade',
});

db.students.add({
  id: "5620000000",
  firstName: "John",
  lastName: "Doe",
  grade: 12,
});