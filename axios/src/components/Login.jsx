import React from "react";
import axios from "../api/axios";
import { Button, Form, Input, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
function Login() {
 const nav=useNavigate()
  async function onSubmit(values) {
    try {
      const response = await axios.post("/user/login", {
        username: values.username,
        password: values.password,
      });
      if (response.data.message) {
        message.error(response.data.message);
      } else {
        localStorage.setItem(
          "refresh-token",
          JSON.stringify(response.data.user["refresh"])
        );
        message.success(`${values.username}`);
          nav("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Form labelCol={{ span: 9 }} onFinish={onSubmit}>
      <Typography.Title level={2}>SIGN IN</Typography.Title>
      <Form.Item
        label="username"
        name="username"
        rules={[{ required: true, message: "Please enter a username" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="password"
        name="password"
        rules={[
          { required: true, message: "Please enter a password" },
          {
            type: "password",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Sign In</Button>
      </Form.Item>
      <Typography.Link href="register">SignUp</Typography.Link>
    </Form>
  );
}

export default Login;
