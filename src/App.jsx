import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import FooterSection from './components/Footer/FooterSection';
import Branches from './pages/Branches';
import About from './pages/About';
import Contact from './pages/Contact';
import Franchising from './pages/Franchising';
import NavSection from './components/Header/NavSection';
import ErrorSection from './components/Header/ErrorSection';
// import BannerSection from './components/Header/BannerSection';


const Dashboard = () =>{
  return(
  <div>
    {/* <BannerSection /> */}
    <NavSection />
    <Outlet />
     <FooterSection />
  </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: "branches", 
        element: <Branches />
      },
      {
        path: "about", 
        element: <About />
      },
      {
        path: "franchising", 
        element: <Franchising />
      },
      {
        path: "contact", 
        element: <Contact />
      },
      { path: "*",
         element: <ErrorSection /> }
  ]
  },

]);

function App() {
  return (
        <RouterProvider router={router} />
  )
}

export default App
