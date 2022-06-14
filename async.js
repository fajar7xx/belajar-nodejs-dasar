function samplePromise() {
  return Promise.resolve("Fajar Siagian");
}

// const name = await samplePromise();
// console.info(name);
//SyntaxError: await is only valid in async functions and the top level bodies of modules

//cara ngakalinnya adalah seperti ini
async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
//fajar siagian
