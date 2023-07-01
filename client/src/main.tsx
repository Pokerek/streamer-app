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

import StreamersListPageLoader from './loaders/streamers-list-page-loader';

import ROUTES from './routes';

import './styles/index.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={<ErrorPage />}
    >
      <Route
        path={ROUTES.STREAMERS_LIST.PATH}
        element={<SteamersListPage />}
        loader={StreamersListPageLoader}
      />
      <Route
        path={ROUTES.STREAMER_DETAIL.PATH}
        element={<SteamerDetailPage />}
      />
    </Route>
  )
);

const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');

const root = createRoot(container);
root.render(<RouterProvider router={router} />);
