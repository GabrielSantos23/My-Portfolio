import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
} from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Routes1 from '../Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes1 />
  </React.StrictMode>
);
