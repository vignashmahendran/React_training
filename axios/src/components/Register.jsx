import { Button, Form, Input, Typography, message } from "antd";
import React from "react";
import axios from "../api/axios";
function Register() {
  async function onSubmit(values) {
    try {
        const response = await axios.post("/user/register", {
          username: values.username,
          password: values.password,
          email: values.email,
        });
        
        message.success(response.data.msg);
    } catch (err) {
        console.log(err);
    }
  }
  return (
    <Form labelCol={{ span: 9 }} onFinish={onSubmit}>
      <Typography.Title level={2}>SIGN UP</Typography.Title>
      <Form.Item
        label="username"
        name="username"
        rules={[{ required: true, message: "Please enter a username" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="email"
        name="email"
        rules={[
          { required: true, message: "Please enter a email" },
          {
            type: "email",
          },
        ]}
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
        <Button htmlType="submit">Register</Button>
      </Form.Item>
      <Typography.Link href="login">SignIn</Typography.Link>
    </Form>
  );
}

export default Register;
