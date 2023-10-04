import { Button, Form, Input, InputNumber, Typography, message } from 'antd'
import React from 'react'
import { privateAxios } from '../api/axios';

function AddItem() {
   
  
  const onSubmit = (values) => {
    privateAxios
      .post("/add", {
        name: values.name,

        price: values.price,
        qty: values.qty,
        description: values.description,
      })
      .then((res) => {
        message.success(`${res.data.name} added`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Form onFinish={onSubmit}>
      <Button href="/dashboard/" danger>
        Back
      </Button>
      <Typography.Title>Add Product</Typography.Title>
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
          Add
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddItem