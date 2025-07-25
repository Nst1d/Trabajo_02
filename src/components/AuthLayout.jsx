// src/components/AuthLayout.jsx
import { Outlet, Navigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AuthLayout() {
  const { userData, loading } = useAuth();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: "220px", background: "#f4f4f4", padding: "2rem 1rem" }}>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/home">Inicio</Link>
            </li>
            <li>
              <Link to="/perfil">Perfil</Link>
            </li>
            {/* Puedes agregar más enlaces aquí */}
          </ul>
        </nav>
      </aside>
      <div style={{ flex: 1 }}>
        <header style={{ background: "#1976d2", color: "white", padding: "1rem" }}>
          <h1>Bienvenido, {userData.nombre || "Usuario"} 👋</h1>
        </header>
        <main style={{ padding: "2rem" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
