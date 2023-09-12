import { Col, Row, List, Avatar, Grid } from "antd";

const { useBreakpoint } = Grid

export default function ImgScroll({ listValue }) {
    const screen = useBreakpoint()
  return (
    <Row style={{ height: "60vh", boxSizing: "border-box" }}>
      <Col span={12} style={{minWidth:"195px"}}>
        <img
          src="src\assets\Chat.svg"
          width="100%"
          style={{ objectFit: "cover" }}
        />
      </Col>
      <Col span={12} style={{ overflowY: "auto", height: "100%",minWidth:"195px"}}>
        <List
          itemLayout="vertical"
          size="large"
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
      </Col>
    </Row>
  );
}


