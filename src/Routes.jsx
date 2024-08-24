import { useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./login/Login";
import Edit_Scale from "./scale/Edit_Scale.jsx";
import Home from "./home/Home.jsx";
import Ministries_main from "./ministries/ministries_main.jsx";

function RoutesComponent() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Login}/>
      <Route path='/edit_scale' Component={Edit_Scale}/>
      <Route path='/home' Component={Home}/>
      <Route path='/ministries' Component={Ministries_main}/>
    </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
