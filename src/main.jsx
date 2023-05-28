import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Frame from './frame.jsx';
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from 'react-router-dom';
import Calendar from './calendar';
import Subway from './subway';
import Weather from './weather';

// 404화면을 어떻게 꾸밀지?

const router = createBrowserRouter([
  {
    path: '/',
    element: <Frame />,
    errorElement: <div>아이고야</div>,
    children: [
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'subway',
        element: <Subway />,
      },
      {
        path: 'weather',
        element: <Weather />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
