import axios from "axios";
import { BASE_URL } from "../api/axios";
export default async function refresh() {
  const refreshToken = JSON.parse(localStorage.getItem("refresh-token"));
  let config = {
    method: "get",

    url:`${BASE_URL}/user/refresh`,
    headers: {
      Authorization: "Bearer " + refreshToken,
    },
  };
  let data;
  await axios
    .request(config)
    .then((res) => {
      

      data= res.data["new access"];
    })
    .catch((err) => {
      console.log(err);
    });
    return data;
}
