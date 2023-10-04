import { Button, Form, Input, InputNumber, Typography, message } from "antd";
import React from "react";
import { privateAxios } from "../api/axios";
import { useLocation } from "react-router-dom";
function Update() {
      const location = useLocation();
      const myData = location.state;
      
  const onSubmit = (values) => {
    
    privateAxios
      .put(`/update/${myData.id}`, {
        name: values.name,

        price: values.price,
        qty: values.qty,
        description: values.description,
      })
      .then((res) => {
        message.success(`${res.data.name} updated`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Form onFinish={onSubmit} initialValues={myData}>
      <Button href="/dashboard/" danger>
        Back
      </Button>
      <Typography.Title>Update Product</Typography.Title>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Price" name="price" rules={[{ type: "number" }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item label="Quantity" name="qty">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" block>
          Update
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Update;
