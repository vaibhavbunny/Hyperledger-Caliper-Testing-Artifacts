const { RateController } = require('rate-controller-library');

const rateController = new RateController();

const initialClients = 10;
const maxClients = 1000; // Adjust as needed
const clientIncrement = 10;
const durationInSeconds = 60;

for (let clients = initialClients; clients <= maxClients; clients += clientIncrement) {
    console.log(`Testing with ${clients} clients`);
    rateController.setNumClients(clients);
    rateController.start();
    setTimeout(() => {
        rateController.stop();
        const throughput = rateController.getTransactionsProcessed() / durationInSeconds;
        const latency = rateController.getAverageLatency();
        console.log(`Throughput: ${throughput} TPS, Average Latency: ${latency} ms`);
    }, durationInSeconds * 1000);
    await new Promise(resolve => setTimeout(resolve, durationInSeconds * 1000));
}
