import {
  Radio,
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Useredit() {
  const [componentDisabled, setComponentDisabled] = React.useState(true);
  const [buttonname, setbuttonname] = React.useState("Update");

  const nav = useNavigate();
  const token = JSON.parse(localStorage.getItem("update"));
  const [formdata, setFormData] = React.useState(
    JSON.parse(localStorage.getItem(token))
  );
  const handleSubmit = () => {
    // event.preventDefault();

    localStorage.setItem(formdata.email, JSON.stringify(formdata));

    console.log(formdata);
    setbuttonname("Update");
    setComponentDisabled(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  return (
    <div
      style={{
        border: "2px solid blue",
        borderRadius: "12px",
        marginTop: 8,
        padding: 20,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          onClick={() => {
            localStorage.removeItem("update");
            nav("/alluser");
          }}
        >
          Back
        </Button>

        <Button
          danger
          onClick={() => {
            let update = JSON.parse(localStorage.getItem("update"));
            let users = JSON.parse(localStorage.getItem("alluser") || "[]");
            users = users.filter((user) => user != update);
            localStorage.removeItem(update);
            localStorage.removeItem("update");
            localStorage.setItem("alluser", JSON.stringify(users));
            nav("/alluser");
          }}
        >
          Delete
        </Button>
      </div>
      <Typography>Welcome {formdata.name}</Typography>
      <Form
        disabled={componentDisabled}
        layout="vertical"
        name="basic"
        style={{
          marginTop: 40,
          // maxWidth: 600,
        }}
        //
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input name="name" value={formdata.name} onChange={handleChange} />
        </Form.Item>

        <Form.Item
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input name="email" value={formdata.email} onChange={handleChange} />
        </Form.Item>
        <Form.Item
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            name="password"
            value={formdata.password}
            onChange={handleChange}
          />
        </Form.Item>
      </Form>
      <Button
        type="primary"
        onClick={() => {
          if (buttonname == "Update") {
            setbuttonname("Save");
            setComponentDisabled(false);
          } else {
            handleSubmit();
          }
        }}
      >
        {buttonname}
      </Button>
    </div>
  );
}
