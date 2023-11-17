import React, { useContext } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './shared/navbar/Navbar';
import Footer from './shared/footer/Footer';

import Home from './routes/home/Home';
import Portfolio from './routes/portfolio/Portfolio';
import Resume from './routes/resume/Resume';
import Contact from './routes/contact/Contact';
import NotFound from './routes/notfound/NotFound';

import { ThemeContext } from './context/ThemeContext';

import './styles/_main.scss';
import './App.scss';

function Dashboard() {
  let theme = useContext(ThemeContext).theme;

  return (
    <div className={`container ${theme} root`} id='root'>
      <div className="background root">
        <Navbar />
        <div className="page-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
