import { AIBridge } from '../../src/index';

const init = async () => {
  const aibridge = new AIBridge('ABCDB', 'ABCDB');
  const dataset = await aibridge.createDataset('HousePricing.dev', `${__dirname}/house_pricing.csv`);

  console.log(dataset);
};

init();
