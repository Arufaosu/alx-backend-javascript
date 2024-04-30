#!/usr/bin/node

console.log('Welcome to Holberton School, what is your name?');

let inputData = '';

process.stdin.on('data', (chunk) => {
  inputData += chunk;
});

process.stdin.on('end', () => {
  const name = inputData.trim();
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
});

