export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const PRODUCTION_URL =
  process.env.PRODUCTION_URL || 'https://utc-bookstore.herokuapp.com/';

export const FacebookAppId = '596511131806490';

export const ITEM_PER_PAGE = 9;

export const REVIEW_COUNT = 3;

export enum Language {
  VI = 'vi',
  EN = 'en',
}

export enum HTTP_STATUS {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

export enum COOKIE_KEYS {
  ACCESS_TOKEN = '_bookstore_access_token',
  REFRESH_TOKEN = '_bookstore_refresh_token',
}

export const BookStoreInfomation = {
  address: 'Số 3 phố Cầu Giấy, P.Láng Thượng, Q.Đống Đa, Hà Nội',
  phone: '(84.24) 37663311',
  email: 'bookstore.project.utc@gmail.com',
};

export enum DocumentStatus {
  Approved = 'Approved',
  Pending = 'Pending',
  Rejected = 'Rejected',
}
