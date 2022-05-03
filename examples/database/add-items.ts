import { AIBridge } from '../../src/index';

const init = async () => {
  const aibridge = new AIBridge('GIIMCFAI', 'FNQIGZRBVPJL');
  await aibridge.dataset('0d01721d-4b69-49dd-8b38-f5c8557a7e41').addItems([
    {
      Age: 37,
      Driving_License: 1,
      Region_Code: 6,
    },
    {
      Age: 37,
      Driving_License: 1,
      Region_Code: 6,
    },
  ]);
};

init();
