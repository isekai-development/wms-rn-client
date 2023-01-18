import axios from "axios";
import appConfig from "../../app.config";

export function getSupplier() {
  return axios
    .get(appConfig.extra.apiUrl + "/supplier/list")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}
