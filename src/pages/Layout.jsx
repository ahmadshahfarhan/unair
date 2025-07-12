import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setShowSplash(false);
    }
  }, [location]);

  if (location.pathname === "/" && showSplash) {
    return <SplashScreen />;
  }

  if (location.pathname === "/" && !showSplash) {
    return <Navigate to="/Login" replace />;
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SeaMart" element={<SeaMart />} />
        <Route path="/SeaCraft" element={<SeaCraft />} />
        <Route path="/SeaExplore" element={<SeaExplore />} />
        <Route path="/SeaTalk" element={<SeaTalk />} />
      </Routes>
    </div>
  );
};

export default Layout;
