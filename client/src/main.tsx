import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/landing/index.tsx';
import Explore from './pages/explore/index.tsx';
import Tests from './pages/tests/index.tsx';
import Tree from './pages/tree/index.tsx';
import Login from './pages/login/index.tsx';
import Singup from './pages/singup/index.tsx';
//import Explore from './pages/explore/test.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/explore/:id",
    element: <Tree />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/singup",
    element: <Singup />,
  },
  {
    path: "/tests",
    element: <Tests />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
