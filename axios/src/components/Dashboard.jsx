import { Table } from "antd";
import React, { useEffect } from "react";
import refresh from "../endpoint/refresh";
import { privateAxios } from "../api/axios";
function Dashboard() {
    
    privateAxios.interceptors.request.use(
      (config) => {
        if (config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${refresh()}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  

  return <Table />;
}
function getall() {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://127.0.0.1:5000/getall",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
    body: {
      page: 2,
      per_page: 3,
    },
  };

  axios
    .request(config)
    .then((res) => {
      setmsg(JSON.stringify(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      setmsg(JSON.stringify(err));
      console.log(err);
      refresh();
    });
}

export default Dashboard;
