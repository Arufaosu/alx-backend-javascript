#!/usr/bin/node
import { readFile } from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', ((err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n').filter((line) => line !== '').slice(1);
        const students = lines.map((line) => line.split(','));

        const studentsByFields = {};

        students.forEach((item) => {
          const firstName = item[0];
          const field = item[3];

          if (!studentsByFields[field]) {
            studentsByFields[field] = [firstName];
          } else {
            studentsByFields[field].push(firstName);
          }
        });

        resolve(studentsByFields);
      }
    }));
  });
}

export default readDatabase;
