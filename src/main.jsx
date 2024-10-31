import ReactDOM from 'react-dom/client'
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import Error from './pages/Error'; //note when importing components I do not need the file extension if the file is .js,.jsx.,.ts,.tsx BUT I would need it if the file were something else like .json
import AboutPage from './pages/AboutPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/AboutPage',
        element: <AboutPage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
