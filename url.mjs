import { URL } from "url";

const myWeb = new URL("https://www.fajarsiagian.com/belajar?kelas=nodejs");

console.info(myWeb.toString());
console.info(myWeb.protocol);
console.info(myWeb.host);
console.info(myWeb.pathname);
console.info(myWeb.searchParams);
