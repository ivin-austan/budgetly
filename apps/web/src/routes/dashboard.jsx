import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "../Pages/Dashboard";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});
