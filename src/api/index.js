import { request } from "./request";
import * as URLS from "./urls";
export const API = {
    getSubAccounts: (onResponse, data) => {
      request(onResponse, data, "GET", URLS.FETCH_SUB_ACCOUNTS);
    },
};