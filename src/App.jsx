/* eslint-disable no-unused-vars */
import { Outlet } from "react-router";
import Navbar from "./Shared/Navbar";
import AllTasks from "./Page/Home/AllTasks";
import Home from "./Page/Home/Home";
import moment from "moment";

const App = () => {
 
  return (
    <div className="space-y-10">
    

      <Navbar />
      <div className="md:max-w-[85%] mx-auto space-y-10">
        <AllTasks />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
