import React, { useState } from "react";
import { Button, Menu, Layout, Input, Tabs } from "antd";
import {
  SettingOutlined,
  MenuOutlined,
  CloseOutlined,
  LogoutOutlined,
  HomeOutlined,
  AppstoreOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import FormDetail from "./FormDetail";
import ListDetail from "./ListDetail";
import ImgScroll from "./ImgScroll";
import Paginate from "./Paginate";

const { Sider, Header, Content, Footer } = Layout;


const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [listValue, setListValue] = useState(
    JSON.parse(localStorage.getItem("listValue")) || []
  );
  function getItem(label, key, icon) {
    return {
      label: label,
      key: key,
      icon: icon,
    };
  }

  const items = [
    getItem("Home", "sub1", <HomeOutlined />),
    getItem("App", "sub2", <AppstoreOutlined />),
    getItem("Setting", "sub3", <SettingOutlined />),
    getItem("Logout", "logout", <LogoutOutlined />),
  ];

  const tabs = [
    {
      key: "1",
      label: "Form",
      children: (
        <FormDetail listValue={listValue} setListValue={setListValue} />
      ),
    },
    {
      key: "2",
      label: "List",
      children: <ListDetail listValue={listValue} />,
    },
    {
      key: "3",
      label: "Scroll",
      children: <ImgScroll listValue={listValue} />,
    },
  ];
  return (<Paginate/>
    // <Layout>
    //   <Header
    //     style={{
    //       padding: 0,
    //       display: "flex",
    //       justifyContent: "space-between",
    //       background: "#ffffff",
    //     }}
    //   >
        
    //     <Menu
    //       mode="horizontal"
    //       items={items}
    //       defaultSelectedKeys={["sub1"]}
    //       // style={{ borderRadius: 10 }}
    //     />
    //   </Header>
    //   <Layout style={{ margin: "10px" }}>
    //     <Content
    //       style={{
    //         margin: "4px 14px",
    //         padding: 24,
    //         borderRadius: 10,
    //         background: "#ffffff ",
    //         marginBottom:"10px",
    //         minHeight:"80vh"
    //       }}
    //     >
    //       <Tabs defaultActiveKey="1" items={tabs} />
    //     </Content>
    //   </Layout>
    //   <Footer
    //     style={{
    //       padding: 7,
    //       textAlign: "center",
    //       background: "#444444",
    //       color: "#ffffff",
    //       width: "100%",
    //       position: "fixed",
    //       bottom: 0,
    //     }}
    //   >
    //     Copyright
    //   </Footer>
    // </Layout>
  );
};

export default App;

