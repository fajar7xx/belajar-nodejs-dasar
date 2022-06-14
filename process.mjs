import process from "process";

process.addListener("exit", (exitCode) => {
  console.info(`node js exit with exit code ${exitCode}`);
});

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1);

console.info("not printed because exit");
