import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        
      <Header/>

        <Outlet/>

      <Footer/>

    </div>
  )
}
