import { useLocation, Outlet, Navigate } from "react-router-dom";

const FinishGuard = () => {
  const location = useLocation();

  if (!location.state?.fromPlayground) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default FinishGuard;
