import Currency from "./3-currency.js";

export default class Pricing {
  constructor(amount, Currency) {
    this._amount = amount;
    this._currency = Currency;
  }

  get amount() {
    return this._amount;
  }
  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }
  set currency(currency) {
    this._currency = Currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
