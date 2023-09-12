import React, { useState } from "react";
import { Button, Form, Input, Statistic, Row, Col } from "antd";
const { TextArea } = Input;

function FormDetail({ listValue, setListValue }) {
  const [formData, setFormData] = useState({
    username: "",
    message: "",
  });

  const handleSubmit = () => {
    const updatedList = [...listValue, formData];
    localStorage.setItem("listValue", JSON.stringify(updatedList));
    setListValue(updatedList);

    setFormData({
      username: "",
      message: "",
    });

    console.log("success:", updatedList);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const messageValue = listValue.length;
  return (
    <Row>
      
      <Col span={12}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 12,
          }}
          style={{
            maxWidth: 600,
            display: "initial",
          }}
          autoComplete="off"
          onFinish={handleSubmit}
        >
          <Form.Item
            label="User Name"
            rules={[
              {
                required: true,
                message: "Please enter your username!",
              },
            ]}
          >
            <Input
              name="username"
              value={FormData.username}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item label="Message">
            <TextArea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
            }}
          >
            <Statistic title="Total Message" value={messageValue} />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default FormDetail;
