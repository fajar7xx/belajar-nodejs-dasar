import util from "util";

const firstName = "Fajar";
const lastName = "Siagian";

console.info(`Halo ${firstName} ${lastName}`);
console.info("Halo %s %s", firstName, lastName);

const person = {
  firstName: "Fajar",
  lastName: "Siagian",
};
console.info(`Person: ${JSON.stringify(person)}`);
console.info(util.format("Person: %j", person));
