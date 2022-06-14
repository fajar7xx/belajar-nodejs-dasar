import fs from "fs";

const writer = fs.createWriteStream("target.log");
writer.write("Fajan\n");
writer.write("SEtiawan\n");
writer.write("Siagian\n");
writer.close();

const reader = fs.createReadStream("target.log");
reader.on("data", (data) => {
  console.info(data.toString());
  reader.close();
});
