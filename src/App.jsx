import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  createHashRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
// import NavSection from './components/Header/NavSection';
import Home from './pages/Home';
import FooterSection from './components/Footer/FooterSection';
import Branches from './pages/Branches';
import About from './pages/About';
import Contact from './pages/Contact';
import Franchising from './pages/Franchising';
import NavSection from './components/Header/NavSection';


const Dashboard = () =>{
  return(
  <div>
    <NavSection />
    <Outlet />
     <FooterSection />
  </div>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/", 
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
      }
  ]
  },

]);

function App() {

  return (
      <div>
        <RouterProvider router={router} />
      </div>
  )
}

export default App
