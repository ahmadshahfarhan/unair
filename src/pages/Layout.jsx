import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Home from "./Home/Home";
import SeaMart from "./SeaMart/SeaMart";
import SeaCraft from "./SeaCraft/SeaCraft";

const Layout = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/SeaMart" element={<SeaMart />} />
          <Route path="/SeaCraft" element={<SeaCraft />} />
        </Routes>
      </div>
    </>
  );
};

export default Layout;
