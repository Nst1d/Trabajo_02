import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <main className="card p-4 shadow" style={{ minWidth: 320, maxWidth: 400 }}>
        <Outlet />
      </main>
    </div>
  );
}