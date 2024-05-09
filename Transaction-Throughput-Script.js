const { RateController } = require('rate-controller-library');

const rateController = new RateController();

const transactionsPerSecond = 100; // Adjust as needed
const durationInSeconds = 60; // Test duration

// Measure Transaction Throughput
rateController.start();
setTimeout(() => {
    rateController.stop();
    const throughput = rateController.getTransactionsProcessed() / durationInSeconds;
    console.log(`Transaction Throughput: ${throughput} transactions per second`);
}, durationInSeconds * 1000);
