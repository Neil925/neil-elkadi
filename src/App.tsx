import React from 'react';
import './App.scss';
import Navbar from './shared/navbar/Navbar';
import { Outlet, Route, Routes } from 'react-router-dom';
import Footer from './shared/footer/Footer';
import Home from './routes/home/Home';
import Portfolio from './routes/portfolio/Portfolio';
import Resume from './routes/resume/Resume';
import Contact from './routes/contact/Contact';
import NotFound from './routes/notfound/NotFound';

function Dashboard() {
  return (
    <div className='container theme theme--default'>
      <Navbar />
      <div className="page-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}>
        <Route index element={<Home/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="resume" element={<Resume/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
