import Navbar from "../../components/SeaMart/Navbar"
import InfoCards from "../../components/SeaMart/InfoCards"
import Produk from "../../components/SeaMart/Produk"
import BottomNavbar from "../../components/SeaMart/BottomNavbar"

const SeaMart = () => {
    return (
        <>
        <div>
            <Navbar/>
            <InfoCards/>
            <Produk/>
            <BottomNavbar/>
        </div>
        </>
    )
}

export default SeaMart