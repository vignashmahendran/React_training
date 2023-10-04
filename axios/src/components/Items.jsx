import { Button, Form, Layout, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { privateAxios } from "../api/axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
function Items({ renderer, rerender }) {
    const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    privateAxios
      .get("/getall")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [renderer]);
  const cols = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      key: "qty",
    },
    {
      render: (data, record, index) => (
        <Button
          
          onClick={() => {navigate('/dashboard/update', {state:record})}
          }
        >
          <EditOutlined/>
        </Button>
      ),
    },
    {
      render: (data, record, index) => (
        <Button
         
          danger
          onClick={() => {
            privateAxios.delete(`/delete/${record.id}`).then((res) => {
              rerender(res);
            });
          }}
        >
          <DeleteOutlined />
        </Button>
      ),
    },
  ];

  return (
    <Layout>
      <Layout.Header
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          href="login"
          danger
          onClick={() => localStorage.removeItem("refresh-token")}
        >
          Log Out
        </Button>
        <Button href="/dashboard/add">Add</Button>
      </Layout.Header>

      <Table dataSource={data} columns={cols} pagination={{ pageSize: 5 }} />
    </Layout>
  );
}

export default Items;
