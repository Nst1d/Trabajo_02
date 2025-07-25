import { Routes, Route } from "react-router-dom";
import PublicLayout from "../components/PublicLayout";
import AuthLayout from "../components/AuthLayout";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Route>
      {/* Rutas protegidas */}
      <Route element={<AuthLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>
      {/* Redirección por defecto */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}