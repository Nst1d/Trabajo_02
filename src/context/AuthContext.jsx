import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de usuario (puedes reemplazar por lógica real)
    setTimeout(() => {
      // setUserData({ nombre: "Usuario Demo" }); // Descomenta para simular usuario logueado
      setUserData(null); // Usuario no logueado por defecto
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider value={{ userData, loading, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
