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

import streamersListPageLoader from './loaders/streamers-list-page-loader';
import streamerDetailPageLoader from './loaders/streamer-detail-page-loader';
import streamersListPageAction from './actions/streamers-list-page-action';

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
        loader={streamersListPageLoader}
        action={streamersListPageAction}
      />
      <Route
        path={ROUTES.STREAMER_DETAIL.PATH}
        element={<SteamerDetailPage />}
        loader={streamerDetailPageLoader}
      />
    </Route>
  )
);

const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');

const root = createRoot(container);
root.render(<RouterProvider router={router} />);
