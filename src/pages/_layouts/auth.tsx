import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div>
      <h1>Autenticação</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
