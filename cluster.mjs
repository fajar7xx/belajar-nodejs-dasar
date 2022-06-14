import cluster from "cluster";
import http from "http";
import os from "os";
import process from "process";

if (cluster.isPrimary) {
  // jalankan worker
  console.info(`Primary: ${process.pid}`);
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  cluster.addListener("exit", (worker) => {
    console.info(`Worker ${worker.id} is exit`);

    //jika ada worker yang mati kita bisa buat high availability
    //running lagi
    cluster.fork();
  });
}

if (cluster.isWorker) {
  console.info(`Worker: ${process.pid}`);

  const server = http.createServer((request, response) => {
    response.write(`Response from process ${process.pid}`);
    response.end();
    process.exit();
  });

  server.listen(3000);
}
