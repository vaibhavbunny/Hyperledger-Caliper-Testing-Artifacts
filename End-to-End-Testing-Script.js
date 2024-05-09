const { RateController } = require('rate-controller-library');
const { BlockchainClient } = require('blockchain-client-library');
const { TransactionGenerator } = require('transaction-generator-library');

const rateController = new RateController();
const blockchainClient = new BlockchainClient();
const transactionGenerator = new TransactionGenerator();

describe('Rate Controller End-to-End Tests', () => {
    it('should process transactions end-to-end', async () => {
        rateController.start();

        for (let i = 0; i < 100; i++) {
            const transaction = transactionGenerator.generateTransaction();
            const result = await rateController.submitTransaction(transaction);
            expect(result.status).to.equal('SUCCESS');
        }
        const blocks = await blockchainClient.getBlocks();
        expect(blocks.length).to.be.greaterThan(0);
        expect(blocks[0].transactions.length).to.equal(100);
      
        rateController.stop();
    });
});
