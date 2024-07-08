import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Page2 from './pages/nestedComponent/Page2';
import RootLayout from './components/RootLayout';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />

        },
        {
          path: 'page2',
          element: <Page2 />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        }

      ]
    }

  ]);


  return <RouterProvider router={router} />
}

export default App