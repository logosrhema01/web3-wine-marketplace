import { TokenIdentifier } from "src/shared/models/entities/NFT.model";

interface OrdersResponse {
  incoming: IncomingOffersResponse[];
  outgoing: OutgoingOffersResponse[];
}

interface ListingsResponse extends ListingModel, HighestOfferModel, TokenIdentifier {}

interface IncomingOffersResponse extends OfferModel, LowestOfferModel {
  offerer: string;
}

interface OutgoingOffersResponse extends OfferModel, HighestOfferModel, TokenIdentifier {}

interface ListingModel extends BaseOrderModel {
  listingPrice: string;
}

interface OfferModel extends BaseOrderModel {
  offer: string;
  offerer: string;
}

interface BaseOrderModel {
  brand: string;
  image: string;
  endTime: string;
  currency: string;
  orderHash: string;
}

interface HighestOfferModel {
  highestOffer?: string | null;
  highestOfferCurrency?: string | null;
}

interface LowestOfferModel {
  lowestOffer?: string | null;
  lowestOfferCurrency?: string | null;
}

interface TransactionResponse {
  event: string;

  image: string;
  brand: string;

  price: string;
  currency: string;

  source: string;
  
  date: string;
  time: string;

  txnHash: string;
}

export {
  ListingsResponse,
  IncomingOffersResponse,
  OutgoingOffersResponse,
  OrdersResponse,
  TransactionResponse
}