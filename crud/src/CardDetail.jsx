import { Carousel, Card, Button } from "antd";
import React from "react";
import { EditOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
const { Meta } = Card;
import { useNavigate } from "react-router-dom";
 
function CardDetail() {
  const nav=useNavigate()
  let users = JSON.parse(localStorage.getItem("alluser") || "[]");

  const userdata = users.map((user) => JSON.parse(localStorage.getItem(user)));

  return (
    <Carousel
      style={{
        width: 300,
      }}
      dotPosition="top"
     
      
    >
      {userdata.map((item) => (
        <Card
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Button onClick={()=>{localStorage.setItem(
      "update",
      JSON.stringify(item.email)
    );
    nav("/alluser/update");}}>
              <EditOutlined />
            </Button>,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title={item.name}
            description={item.email}
          />
        </Card>
      ))}
    </Carousel>
  );
}

export default CardDetail;
