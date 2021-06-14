export interface Product {
  name: string;
  id: string;
  brand: string;
  comment: string;
  dealer: string;
}
export interface Brand {
  name: string;
  comment: string;
  id: number;
}

export interface Dealer {
  name: string;
  comment: string;
  id: number;
}

export type Item = Product | Brand | Dealer