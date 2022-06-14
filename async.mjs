function samplePromise() {
  return Promise.resolve("Fajar Siagian");
}

const name = await samplePromise();
console.info(name);
