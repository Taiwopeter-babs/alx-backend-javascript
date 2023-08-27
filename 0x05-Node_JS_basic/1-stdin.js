require('node:child_process');

// set Input encoding
// process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// read input and write to stdout
process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data) {
    process.stdout.write(`Your name is: ${data}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
