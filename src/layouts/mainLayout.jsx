import { Link, Outlet } from "react-router-dom";
import Footer from "../componentes/Footer/Footer";
import Navbar from "../componentes/Navbar/Navbar";

const MainLayout = () => {

    return (
        <>
            <Navbar/>
    
            <Outlet></Outlet>

            <Footer/>
        </>
    )
}

export default MainLayout