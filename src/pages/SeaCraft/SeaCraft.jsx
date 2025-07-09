import Navbar from "../../components/SeaCraft/Navbar";
import InfoCards from "../../components/SeaCraft/InfoCards";
import Produk from "../../components/SeaCraft/Produk";
import BottomNavbar from "../../components/SeaCraft/BottomNavbar";

const SeaCraft = () => {
  return (
    <>
      <div>
        <Navbar />
        <InfoCards />
        <Produk />
        <BottomNavbar/>
      </div>
    </>
  );
};

export default SeaCraft;
