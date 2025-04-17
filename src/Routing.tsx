import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./views/Layout";
import Inicio from "./views/pages/inicio";
import { ToastContainer } from "react-toastify";

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}  >
                
                    <Route index path='/' element={<Inicio/>}  />

                </Route>
                
            </Routes>

            <ToastContainer/>   
        </BrowserRouter>
    )
}
