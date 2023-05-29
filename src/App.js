import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Card from './components/card';
import UserForm from './components/usestates';
import Landing from './components/landing';
import Footer from './components/footer';
import AboutPage from './pages/about.jsx';
import UserList from './pages/userlist';
import InsertForm from './pages/insertform';
import NotFound from './pages/404.jsx'; // Import the NotFound component
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" component={UserList} />
        <Route path="*" element={<NotFound />} /> {/* Add the fallback route */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const HomePage = () => {
  return (
    <div>
      <Landing />
      <Card />
      <UserForm />
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <UserList />
        </div>
        <div className="col-lg-6">
        <InsertForm />
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
