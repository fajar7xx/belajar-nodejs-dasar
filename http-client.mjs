import https from "https";

const url = "https://hookb.in/PxMPJE1XQbhpbWnpD1eY";
const request = https.request(
  url,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.info(`Receive: ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Fajar Setiawan",
  lastName: "Siagian",
});

request.write(body);
request.end();
