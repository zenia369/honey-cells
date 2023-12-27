import { useLocation, Outlet, Navigate } from "react-router-dom";

const PlaygroundGuard = () => {
  const location = useLocation();

  if (!location.state?.fromHome) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PlaygroundGuard;
