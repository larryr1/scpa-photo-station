import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/navbar/Navbar"

export const RootLayout = () => {
    return (
      <div className='app'>
        <Navbar />
        <Outlet />
      </div>
    )
}