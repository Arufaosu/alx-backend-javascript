const express = require('express');
const { readFile } = require('fs');

const app = express();

app.get('/', ((req, res) => {
  res.send('Hello Holberton School!');
}));

function writeStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', ((err, data) => {
      if (err) {
        const error = new Error('Cannot load the database');
        reject(error);
      } else {
        let response = '';

        const lines = data.split('\n').filter((line) => line !== '').slice(1);
        const items = lines.map((line) => line.split(','));

        response += `Number of students: ${items.length}`;

        const studentsByFields = {};
        items.forEach((item) => {
          const firstName = item[0];
          const field = item[3];

          if (!studentsByFields[field]) {
            studentsByFields[field] = [firstName];
          } else {
            studentsByFields[field].push(firstName);
          }
        });

        for (const field in studentsByFields) {
          if (Object.hasOwnProperty.call(studentsByFields, field)) {
            const names = studentsByFields[field].join(', ');
            const count = studentsByFields[field].length;
            response += `\nNumber of students in ${field}: ${count}. List: ${names}`;
          }
        }

        resolve(response);
      }
    }));
  });
}

app.get('/students', ((req, res) => {
  writeStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      res.send(error.stack);
    });
}));

app.listen(1245);

module.exports = app;
