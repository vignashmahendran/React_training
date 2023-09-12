import * as React from "react";
import {LockTwoTone}from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input,Typography } from "antd";
const { Title } = Typography;
export default function Login() {
  const [formdata, setFormData] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const nav = useNavigate();
  const handleSubmit = () => {
    // event.preventDefault();
    console.log(formdata)
    let ls =
      localStorage.getItem(formdata.email) || '{"email":"user Not found"}'; ;
    let user = JSON.parse(ls);

    if (user.email == "user Not found") {
      alert("user Not found");
    } else {
      if (user.password == formdata.password) {
        localStorage.setItem("token", JSON.stringify(user.email));
        nav("/");
      } else {
        alert("password incorrect");
      }
    }
    setFormData({})
  };

  return (
    <>
      <Title>
        SIGN IN 
      
      <LockTwoTone />
      </Title>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Email Address :  "
          rules={[
            {
              required: true,
              message: "Please input your username!",
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
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Button type="link" href="/signup">
          Sign Up
        </Button>
      </Form>
    </>
  );
}
