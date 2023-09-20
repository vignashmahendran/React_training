import * as React from "react";
import {LockTwoTone}from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import { Button,message, Checkbox, Form, Input,Typography } from "antd";
const { Title } = Typography;
export default function Login() {

  const [formdata, setFormData] = React.useState({});
const [submitable, setsubmitable] = React.useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (
      formdata.email != undefined &&
      formdata.password != undefined &&
      formdata.email != "" &&
      formdata.password != "" &&
      formdata.email != " " &&
      formdata.password != " "
    ) {
      setsubmitable(false);
    } else {
      setsubmitable(true);
    }
    setFormData({ ...formdata, [name]: value });
  };

  const nav = useNavigate();
  const handleSubmit = () => {
   
    
    // event.preventDefault();
    console.log(formdata)
    let ls =
      localStorage.getItem(formdata.email) || '{"email":"user Not found"}'; 
    let user = JSON.parse(ls);

    if (user.email == "user Not found") {
      message.warning("user Not found");
    } else {
      if (user.password == formdata.password) {
        localStorage.setItem("token", JSON.stringify(user.email));
         message.success(`Welcome ${user.name}`);
        nav("/");
      } else {
        message.warning("password incorrect");
      }
    }
   
    setFormData({})
  };

  return (
  
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          borderRadius: 10,
          // backgroundColor: "light",
          border: "solid 3px black",
          padding: 10,
          maxWidth: 600,
        }}
        onFinish={handleSubmit}
        
      >
        <Title level={2}>
          SIGN IN
          <LockTwoTone />
        </Title>

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
          <Button type="primary" htmlType="submit" disabled={submitable}>
            Submit
          </Button>
        </Form.Item>

        <Button type="link" href="/signup">
          Sign Up
        </Button>
      </Form>
  
  );
}
