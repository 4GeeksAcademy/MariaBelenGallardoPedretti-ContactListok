import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Home from "./views/home";
import NuevoContacto from "./views/nuevoContacto";
import EditarContactos from "./views/EditarContactos";
import injectContext from "./store/appContext";


//create your first component
const Layout = () => {
	return (
        <div>
            <BrowserRouter>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/newContact" element={<NuevoContacto />} />
                        <Route path="/editContact/:index" element={<EditarContactos />} />
                        <Route path="*" element={<h1>Not found! :(</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
