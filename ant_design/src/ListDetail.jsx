import React, { useEffect, useState } from "react";
import { List, Avatar } from "antd";

function ListDetail({ listValue }) {
  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{ pageSize: 3 }}
        dataSource={listValue}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=0" />
              }
              title={<a>{item.username}</a>}
            />
            {item.message}
          </List.Item>
        )}
      />
    </div>
  );
}
export default ListDetail;
