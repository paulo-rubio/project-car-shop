import IAeB from '../Interfaces/IAeB';

export default class AeBDomains {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(AeB : IAeB) {
    this.id = AeB.id;
    this.model = AeB.model;
    this.year = AeB.year;
    this.color = AeB.color;
    this.status = AeB.status;
    this.buyValue = AeB.buyValue;
  }
}