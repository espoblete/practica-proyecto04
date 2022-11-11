import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
    return(
        <div className="contenedor">
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <footer>
                desarrollado por quien sabe quién
            </footer>
        </div>
    )
}

export default Layout