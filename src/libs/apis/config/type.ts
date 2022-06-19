import { IBlogApi } from '../blog/types';
export interface IShopInfomation {
  email: string;
  numberPhone: string;
  address: string;
}
export interface IConfig {
  id: string;
  blog: IBlogApi[];
  shippingMoney?: number;
  shopInfomation?: IShopInfomation;
}
