import { useEffect } from 'react';
import Navbar from '../layout/Navbar/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const tokens = localStorage.getItem('tokens');
    if (!tokens) navigate('/login');
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
