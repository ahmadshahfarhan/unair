import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Home from "./Home/Home";
import SeaMart from "./SeaMart/SeaMart";
import SeaCraft from "./SeaCraft/SeaCraft";
import SeaExplore from "./SeaExplore/SeaExploe";
import SeaTalk from "./SeaTalk/SeaTalk";
import SplashScreen from "../components/Login/SplashScreen";
import useAOS from "../Hooks/useAos";

const Layout = () => {
  useAOS();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3200);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/SeaMart" element={<SeaMart />} />
        <Route path="/SeaCraft" element={<SeaCraft />} />
        <Route path="/SeaExplore" element={<SeaExplore />} />
        <Route path="/SeaTalk" element={<SeaTalk />} />
      </Routes>
    </div>
  );
};

export default Layout;
