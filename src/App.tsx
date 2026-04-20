import { Routes, Route } from "react-router-dom";
import Dados from "./pages/Dados";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dados" element={<Dados />} />
    </Routes>
  );
}