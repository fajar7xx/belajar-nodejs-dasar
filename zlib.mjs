import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("zlib.mjs");
const result = zlib.gzipSync(source);

fs.writeFileSync("zlib.mjs.txt", result);
