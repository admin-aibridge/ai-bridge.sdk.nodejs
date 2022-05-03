import { AIBridge } from '../../src/index';

interface Input {
  AccountWeeks: number;
  ContractRenewal: number;
  DataPlan: number;
  DataUsage: number;
  CustServCalls: number;
  DayMins: number;
  DayCalls: number;
  MonthlyCharge: number;
  OverageFee: number;
  RoamMins: number;
}

const init = async () => {
  const aibridge = new AIBridge('GIIMCFAI', 'FNQIGZRBVPJL');

  const model = aibridge.model('TelecomChurn');

  const prediction = await model.predict<Input>([
    {
      AccountWeeks: 107,
      ContractRenewal: 1,
      DataPlan: 1,
      DataUsage: 3.7,
      CustServCalls: 1,
      DayMins: 161.6,
      DayCalls: 123,
      MonthlyCharge: 82,
      OverageFee: 9.78,
      RoamMins: 13.7,
    },
  ]);

  console.log(prediction);
};

init();
