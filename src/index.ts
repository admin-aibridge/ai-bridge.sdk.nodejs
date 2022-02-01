import { ApiConnector } from './helpers/api-connector';
import { Model } from './classes/model';
import { Dataset } from './classes/dataset';

export class AIBridge extends ApiConnector {
  public model(name: string): Model {
    return new Model(this.apiKey, this.apiSecret, name);
  }

  public dataset(): Dataset {
    return new Dataset(this.apiKey, this.apiSecret);
  }

  public async createDataset(name: string, file: string): Promise<Dataset> {
    return this.dataset().create({
      name,
      file,
    });
  }
}
