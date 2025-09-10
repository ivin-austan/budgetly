import { createFileRoute } from "@tanstack/react-router";
import Analytics from "../Pages/Analytics";

export const Route = createFileRoute("/analytics")({
  component: Analytics,
});
