import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import Header from "../Components/Header";

const RootComponent = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname != "/login" && <Header />}
      <Outlet />
    </div>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
