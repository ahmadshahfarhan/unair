import Login from "./Login/Login";
import Register from "./Register/Register";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default Layout;
