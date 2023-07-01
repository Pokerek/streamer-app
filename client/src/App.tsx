import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Container from './components/container';

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
      <Container>
        <Outlet />
      </Container>
    </main>
  );
}

export default App;
