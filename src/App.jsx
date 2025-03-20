import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  createHashRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavSection from './components/Header/NavSection';
import Home from './pages/Home';
import FooterSection from './components/Footer/FooterSection';
import Branches from './pages/Branches';


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
