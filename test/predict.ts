import { AIBridge } from '../src/index';

interface Input {
  LotArea: number;
  BedroomAbvGr: number;
  YearBuilt: number;
  YrSold: number;
}

const init = async () => {
  const aibridge = new AIBridge('EXGGLMYS', 'PDSCZBUHESPC');

  const model = aibridge.model('HousePricing');

  const prediction = await model.predict<Input>([
    {
      LotArea: 10000,
      YearBuilt: 1960,
      BedroomAbvGr: 5,
      YrSold: 2000,
    },
    {
      LotArea: 10000,
      YearBuilt: 1980,
      BedroomAbvGr: 3,
      YrSold: 2005,
    },
  ]);

  console.log(prediction);
};

init();
