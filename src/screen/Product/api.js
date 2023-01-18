import axios from "axios";
import appConfig from "../../app.config";

export function getProducts() {
  return axios
    .get(appConfig.extra.apiUrl + "/product/list")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}

export function deleteProducts(id) {
  return axios
    .delete(appConfig.extra.apiUrl + "/product/delete?productId=" + id)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}

export function takeOutProduct(id, quantity) {
  return axios
    .put(appConfig.extra.apiUrl + "/product/update?productId=" + id, {
      newData: { quantity },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}
