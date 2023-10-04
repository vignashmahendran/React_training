import { Button, Layout, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { privateAxios } from "../api/axios";
import Items from "./Items";
import AddItem from "./AddItem";
import { Route, Routes } from "react-router-dom";
import Update from "./Update";
function Dashboard() {
  const [renderer,rerender]=useState("initialState");
   return (
     <Routes>
       <Route
         path=""
         element={<Items renderer={renderer} rerender={rerender} />}
       />

       <Route path="add" element={<AddItem  />} />
       <Route path="update" element={<Update/>} />
     </Routes>
   );
 
 
}

export default Dashboard;
