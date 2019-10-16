export interface Product {
  id?: string;
  sku?: string;
  name?: string;
  type?: string;
  brand?: string;
  brandGroup?: string;
  brandGroupImageUrl?: any;
  isFeatured?: boolean;
  isInStock?: boolean;
  isAlcoholic?: boolean;
  isSubscribed?: boolean;
  isPromo?: boolean;
  isOpcoProduct?: false;
  alcoholContent?: string;
  packageName?: string;
  packageType?: string;
  packageSize?: number;
  packageVolume?: number;
  unitName?: string;
  unitType?: string;
  unitVolume?: number;
  listPrice?: number;
  salePrice?: number;
  emptiesDeposit?: number;
  images?: string[];
  unitsOfMeasure?: any;
}
