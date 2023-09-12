// TablePage.js
import React, { useContext } from "react";
import Table from "../components/Table";
import { DataContext } from "../contexts/DataContext";

const TablePage = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      <h1>Table Page</h1>
      <Table data={data} />
    </div>
  );
};

export default TablePage;
