const { RateController } = require('rate-controller-library');

const rateController = new RateController();

// Simulate Transaction Processing
const simulateTransaction = () => {
    const startTime = Date.now();
    rateController.processTransaction(); // Placeholder for transaction processing
    const endTime = Date.now();
    const latency = endTime - startTime;
    console.log(`Transaction Latency: ${latency} milliseconds`);
};

simulateTransaction();
