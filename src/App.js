import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Card from './components/card';
import UseStateComponents from './components/usestates';
import Landing from './components/landing';
import Footer from './components/footer';
import AboutPage from './pages/about.jsx';
import Login from './pages/login.jsx';
import UserList from './pages/userlist';
import InsertForm from './pages/insertform';
import NotFound from './pages/404.jsx';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UserList />} />
        <Route
          path="/login"
          element={<Login setLoggedIn={setLoggedIn} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const HomePage = ({ isLoggedIn }) => {
  return (
    <div>
      <Landing />
      <Card />
      <UseStateComponents />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <UserList />
          </div>
          <div className="col-lg-6">
            {isLoggedIn ? <InsertForm /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
