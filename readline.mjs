import process from "process";
import readline from "readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("masukkan nama anda: ", (name) => {
  console.info(`hallo ${name}`);
  input.close();
});
