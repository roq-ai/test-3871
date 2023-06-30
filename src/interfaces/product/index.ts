import { CartProductInterface } from 'interfaces/cart-product';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  status: string;
  vendor_id?: string;
  created_at?: any;
  updated_at?: any;
  cart_product?: CartProductInterface[];
  vendor?: VendorInterface;
  _count?: {
    cart_product?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  status?: string;
  vendor_id?: string;
}
