import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Frame from './components/Frame/frame.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Calendar from './pages/Calendar/calendar';
import Subway from './pages/Subway/subway.jsx';
import Weather from './pages/Weather/weather.jsx';
import Calculator from './pages/Calculator/calculator';
import { Landing } from './pages/Landing/landing';
import AboutUs from './pages/About/aboutUs';
import NotFound from './NotFound.jsx'; // 404 컴포넌트를 임포트하세요

// 404화면을 어떻게 꾸밀지?

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <NotFound />, // 404 컴포넌트를 errorElement로 지정합니다.
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
