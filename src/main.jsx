import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Frame from './frame.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Calendar from './calendar';
import Subway from './subway';
import Weather from './weather';
import Calculator from './calculator';
import { Landing } from './landing';
import AboutUs from './aboutUs';

// 404화면을 어떻게 꾸밀지?

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <div>아이고야</div>,
    children: [
      {
        path: '/aboutUs',
        element: <AboutUs />,
      },
    ],
  },
  {
    path: 'frame',
    element: <Frame />,
    children: [
      {
        path: '/frame/calendar',
        element: <Calendar />,
      },
      {
        path: '/frame/subway',
        element: <Subway />,
      },
      {
        path: '/frame/weather',
        element: <Weather />,
      },
      {
        path: '/frame/calculator',
        element: <Calculator />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
