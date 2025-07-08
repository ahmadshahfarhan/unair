import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const BottomNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShowNavbar(false); // scroll down -> hide
        } else {
          setShowNavbar(true); // scroll up -> show
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 max-w-[700px] mx-auto bg-cyan-400 text-white z-50 rounded-t-xl shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-around py-2">
        <div className="flex flex-col items-center">
          <AiOutlineHome className="text-2xl" />
          <span className="text-xs">Home</span>
        </div>

        <div className="flex flex-col items-center">
          <BiMessageDetail className="text-2xl" />
          <span className="text-xs">Review</span>
        </div>

        <div className="flex flex-col items-center">
          <CiSearch className="text-2xl" />
          <span className="text-xs">Search</span>
        </div>

        <div className="flex flex-col items-center">
          <CgProfile className="text-2xl" />
          <span className="text-xs">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
