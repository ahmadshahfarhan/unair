import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Home from "./Home/Home";
import SeaMart from "./SeaMart/SeaMart";
import SeaCraft from "./SeaCraft/SeaCraft";
import SeaExplore from "./SeaExplore/SeaExploe";

const Layout = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/SeaMart" element={<SeaMart />} />
          <Route path="/SeaCraft" element={<SeaCraft />} />
          <Route path="/SeaExplore" element={<SeaExplore />} />
        </Routes>
      </div>
    </>
  );
};

export default Layout;
