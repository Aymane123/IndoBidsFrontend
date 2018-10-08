import {OfferParameter} from './offerParameter';
import {Picture} from './picture';

export class Offer {
  offer_id: number;
  id: string;
  url: string;
  price: number;
  oldprice: number;
  currencyId: string;
  categoryId: string;
  delivery: boolean;
  name: string;
  vendor: string;
  vendorCode: string;
  model: string;
  description: string;
  available: string;
  pictures: Picture[];
  offerParameters: OfferParameter[];
}

