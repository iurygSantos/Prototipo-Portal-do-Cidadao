
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Dados from "../pages/Dados";
import Configuracoes from "../pages/Configuracoes";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                {/* rota home */}
                <Route path="/" element={<Home />} />

                {/* listagem */}
                <Route path="/dados" element={<Dados />} />

                {/* config */}
                <Route path="/configuracoes" element={<Configuracoes />} />

            </Routes>
        </BrowserRouter>
    );
}