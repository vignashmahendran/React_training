import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { List, Card, Avatar, Space, Pagination } from "antd";
import Sample from "./sample.json";
const { Meta } = Card;
function Paginate() {
  const [Sample2, setSample] = useState(Sample);
  return (
    <>
      <List
        itemLayout="vertical"
        pagination={{
          defaultPageSize: "3",
          showSizeChanger: true,
          pageSizeOptions: ["3", "5", "10", "50", "100"],
          
          total: Sample2.length,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        }}
        dataSource={Sample2}
        renderItem={(item, index) => (
          <List.Item
            key={item.Id}
            actions={[
              <Space
                onClick={() => {
                  setSample(
                    Sample2.filter((index) => index != item.index),
                    { ...item, Stars: (item.Stars = item.Stars + 1) }
                  );
                }}
              >
                {React.createElement(StarOutlined)}
                {item.Stars}
              </Space>,
              <Space
                onClick={() => {
                  setSample(
                    Sample2.filter((index) => index != item.index),
                    { ...item, Likes: (item.Likes = item.Likes + 1) }
                  );
                }}
              >
                {React.createElement(LikeOutlined)}
                {item.Likes}
              </Space>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://xsgames.co/randomusers/assets/avatars/pixel/${index}.jpg`}
                />
              }
              title={item["First Name"] + " " + item["Last Name"]}
              description={item.Country}
            />
            {item.Comment}
          </List.Item>
        )}
      />
    </>
  );
}

export default Paginate;
