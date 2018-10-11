import {CurrencyWrapper} from '../wrappers/currencyWrapper';
import {CategoryWrapper} from '../wrappers/categoryWrapper';
import {OfferWrapper} from '../wrappers/offerWrapper';

export class Shop {
  id: number;
  name: string;
  company: string;
  url: string;
  local_delivery_cost: string;
  currencies: CurrencyWrapper;
  categories: CategoryWrapper;
  offers: OfferWrapper;
}
export class ShopDTO {
  id: number;
  name: string;
  url: string;
  local_delivery_cost: string;

}
