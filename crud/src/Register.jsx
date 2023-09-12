import * as React from "react";
import { LockTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {Typography,
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
const { Title } = Typography;
const { Option } = Select;
export default function Register() {
  const nav = useNavigate();
  const [formdata, setFormData] = React.useState({});
  const handleSubmit = () => {
    // event.preventDefault();
if (localStorage.getItem(formdata.email)){
  alert("email already exists")
}
else{
   let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(formdata.email) == false) 
            {
                alert('Invalid Email Address');}
else{

  localStorage.setItem(formdata.email, JSON.stringify(formdata));
  let all=localStorage.getItem("alluser")||[]
  localStorage.setItem("alluser", JSON.stringify([...all,formdata.email]))
    console.log(formdata);

    
    setFormData({});
     nav("/signin");
}
   } };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  return (
    <>
      <Title>
        SIGN UP <LockTwoTone />
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
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
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
          label="Email Address"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please enter your E-mail!",
            },
          ]}
        >
          <Input name="email"  value={formdata.email} onChange={handleChange} />
        </Form.Item>

        <Form.Item
          label="Password"
          rules={[
            {
              pattern: new RegExp(
                /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
              ),
              message: "uppercase, lowercase and number",
            },
            { required: true, message: "create a password" },
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

        <Button type="link" href="/signin">
          Sign In
        </Button>
      </Form>
    </>
  );
}
