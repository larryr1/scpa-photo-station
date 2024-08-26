import nedb from '@seald-io/nedb';

export const Students = new nedb({ filename: "students.db", autoload: true });