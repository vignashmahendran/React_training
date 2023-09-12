import { EditOutlined } from "@ant-design/icons";
import { Button, Table, Typography } from "antd";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

let fields = ["name", "email", "password", ];
const AllTable = () => {
  let users = JSON.parse(localStorage.getItem("alluser") || "[]");
  const [usersdata, setusersdata] = useState(
    users.map((user) => JSON.parse(localStorage.getItem(user)))
  );
  const nav=useNavigate()
  let cols = fields.map((col) => ({
    title: col,
    dataIndex: col,
    key: col,
    
  }));
  let delcol = {
    title: "Update",
    dataIndex: "update",
    key: "update",
    render: (data, record, index) => (
      <Button
        onClick={(updateddata) => {
          updatedata(data, record, index, updateddata, "update");
        }}
      >
        <EditOutlined  style={{color:"blue"}}/>
      </Button>
    ),
  };
  

  return <Table dataSource={usersdata} columns={[...cols, delcol]} />;

  function updatedata(data, record, index, updateddata, col) {
    localStorage.setItem(
      "update",
      JSON.stringify(record.email)
    );
    nav("/alluser/update");
  }
};


export default AllTable;
