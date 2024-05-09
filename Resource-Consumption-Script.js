const { RateController } = require('rate-controller-library');

const rateController = new RateController();

setInterval(() => {
    const cpuUsage = rateController.getCPUUsage();
    const memoryUsage = rateController.getMemoryUsage();
    const networkIO = rateController.getNetworkIO();
    console.log(`CPU Usage: ${cpuUsage}%, Memory Usage: ${memoryUsage}MB, Network IO: ${networkIO}KB/s`);
}, 5000);
