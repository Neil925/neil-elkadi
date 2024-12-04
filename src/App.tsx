import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './shared/navbar/Navbar';
import NotFound from './routes/NotFound';

import Home from './routes/Home';
import ThemeButton from './components/fixed/ThemeButton';

function Dashboard() {
  return (
    <div className="dark:text-white overflow-x-hidden antialiased selection:bg-accent">
      <div className='flixed top-0 -z-10 h-full w-full'></div>
      <div className="fixed top-0 z-[-2] h-screen w-screen
            bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
            dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30,183,235,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto min-h-screen flex flex-col">
        <Navbar />
        <ThemeButton />
        <main className="flex-grow pb-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
