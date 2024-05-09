const { RateController } = require('rate-controller-library');

const rateController = new RateController();

const maxTransactionsPerSecond = 1000; // Adjust as needed
const durationInSeconds = 120; // Test duration

rateController.start();
let currentTPS = 100; 
while (Date.now() < (Date.now() + durationInSeconds * 1000)) {
    rateController.setTargetTPS(currentTPS);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const actualTPS = rateController.getTransactionsProcessed() / 1;
    console.log(`Actual TPS: ${actualTPS}, Target TPS: ${currentTPS}`);
    currentTPS = Math.min(currentTPS * 1.1, maxTransactionsPerSecond);
}
rateController.stop();
