import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import ErrorPage from './pages/ErrorScreen/ErrorScreen';
import { PersonsPage, loaderOfPersons } from './pages/PersonsPage/PersonsPage';
import { SplitsPage, loaderOfSplits } from './pages/SplitsPage/SplitsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PersonsPage />,
    loader: loaderOfPersons,
    errorElement: <ErrorPage />
  },
  {
      path: "/split/:id",
      element: <SplitsPage />,
      loader: loaderOfSplits,
      errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
