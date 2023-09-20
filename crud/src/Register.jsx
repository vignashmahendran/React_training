import * as React from "react";
import { LockTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  message,
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
  const [submitable, setsubmitable] = React.useState(true);
  const handleSubmit = () => {
    // event.preventDefault();
    let regname = /^[a-zA-Z\-]+$/;
    let regemail =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let regpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if (regname.test(formdata.name) == false) {
      message.warning("please enter valid name");
    } else if (localStorage.getItem(formdata.email)) {
      message.warning("email already exists");
    } else if (regemail.test(formdata.email) == false) {
      message.warning("Invalid Email Address");
    } else if (regpassword.test(formdata.password) == false) {
      message.warning(
        <>
          <p>
            Password contains at least 8 characters and at most 20 characters.
          </p>
          <p>It contains at least one digit.</p>
          <p>It contains at least one upper case alphabet.</p>
          <p>It contains at least one lower case alphabet.</p>
          <p>
            It contains at least one special character which includes
            !@#$%&*()-+=^.
          </p>
          <p>It doesn’t contain any white space.</p>
        </>
      );
    } else {
      localStorage.setItem(formdata.email, JSON.stringify(formdata));
      let all = JSON.parse(localStorage.getItem("alluser")) || [];
      localStorage.setItem("alluser", JSON.stringify([...all, formdata.email]));
      console.log(formdata);

      setFormData({});
      nav("/signin");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
    if (
      formdata.name != undefined &&
      formdata.email != undefined &&
      formdata.password != undefined &&
      formdata.name != "" &&
      formdata.email != "" &&
      formdata.password != ""
    ) {
      setsubmitable(false);
    } else {
      setsubmitable(true);
    }
  };

  return (
    <>
      <Title level={2}>
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
          <Input name="email" value={formdata.email} onChange={handleChange} />
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
          <Button type="primary" htmlType="submit" disabled={submitable}>
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
