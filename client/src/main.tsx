import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import App from './App';
import ErrorPage from './pages/error-page';
import SteamersListPage from './pages/streamers-list-page';
import SteamerDetailPage from './pages/streamer-detail-page';

import ROUTES from './routes';

import './index.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path={ROUTES.STREAMERS_LIST.PATH} element={<SteamersListPage />} />
      <Route
        path={ROUTES.STREAMER_DETAIL.PATH}
        element={<SteamerDetailPage />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');

const root = createRoot(container);
root.render(<RouterProvider router={router} />);
