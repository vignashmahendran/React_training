import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllTable from "./allTable";
import Useredit from "./useredit";



const TableList = () =>{
  return (
    <Routes>
      <Route index element={<AllTable />} />
      <Route
        
        path="/update"
        element={<Useredit />}
      />
    </Routes>
  );
}


export default TableList;