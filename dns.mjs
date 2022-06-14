import dns from "dns/promises";

const address = await dns.lookup("www.fajarsiagian.com");

console.log(address.address);
console.log(address.family);
