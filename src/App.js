import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import NotFound from './pages/404.jsx';

const Home = lazy(() => import('./pages/home'));
const AboutPage = lazy(() => import('./pages/about.jsx'));
const Login = lazy(() => import('./pages/login.jsx'));
const AddUser = lazy(() => import('./admin/addUser'));

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar />
      <Suspense fallback=
        {<div className="my-5 text-center handle-load">
         <strong className="text-white"> Loading...</strong>
        </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin" element={<AddUser isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
