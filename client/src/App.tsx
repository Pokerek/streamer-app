import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/streamers');
    }
  }, [location.pathname, navigate]);

  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;
