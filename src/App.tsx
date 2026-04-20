import { Routes, Route } from "react-router-dom";
import Dados from "./pages/Dados";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/dados" element={<Dados />} />
    </Routes>
  );
}