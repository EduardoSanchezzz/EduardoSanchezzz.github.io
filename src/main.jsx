import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import ErrorPage from './error-page.jsx';
import About from './About.jsx';
import CpuProj from './CpuProj.jsx';


const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <><ScrollTop/><App /></> ,
    errorElement: <ErrorPage />,
  },
  {
    path: "About",
    element: <><ScrollTop/><About /></>
  },
  {
    path: 'projects/riscv-processor',
    element: <><ScrollTop/><CpuProj /></>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)

