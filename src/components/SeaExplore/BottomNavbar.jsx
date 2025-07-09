import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { LuTicketPercent } from "react-icons/lu";
import { GiScubaTanks } from "react-icons/gi";
import { SiFloatplane } from "react-icons/si";


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
          <SiFloatplane className="text-2xl" />
          <span className="text-xs">SeaExplore</span>
        </div>

        <div className="flex flex-col items-center">
          <FiShoppingCart className="text-2xl" />
          <span className="text-xs">Cart</span>
        </div>

        <div className="flex flex-col items-center">
          <CiSearch className="text-2xl" />
          <span className="text-xs">Search</span>
        </div>

        <div className="flex flex-col items-center">
          <LuTicketPercent className="text-2xl" />
          <span className="text-xs">Voucher</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
