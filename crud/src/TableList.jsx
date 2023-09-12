import { Table } from "antd";

let users = JSON.parse(localStorage.getItem("alluser")||'[]');

let usersdata = users.map((user) => JSON.parse(localStorage.getItem(user)));
let fields = ['name','email','password',];
const TableList = () => <Table dataSource={usersdata} columns={fields.map( col=>({title:col,dataIndex:col,key:col}))} />;

export default TableList;
