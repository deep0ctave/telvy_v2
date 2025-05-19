import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Drawer from './Drawer.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import ContactUs from './ContactUs.jsx';
import Register from './Registration.jsx';
import Login from './Login.jsx';
import ForgotPassword from './ForgotPassword.jsx';
import HomePage from './HomePage.jsx';
import Dashboard from './Dashboard.jsx';
import QuizzesPage from './QuizzesPage.jsx';

// Dummy components
function Home() {
  return <div><h1>Home Page</h1></div>;
}

function Quiz() {
  return <div><h1>Quiz Page</h1></div>;
}

function Settings() {
  return <div><h1>Settings Page</h1></div>;
}

// The main logic component
function MainLayout() {
  const location = useLocation();
  const hideSidebarRoutes = ["/quiz","/about","/contact","/register","/login","/forgotpassword"];
  const showSidebar = !hideSidebarRoutes.includes(location.pathname);

  return (
    <>
      <Drawer showSidebar={showSidebar}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quizzes" element={<QuizzesPage />} />
        </Routes>
      </Drawer>
      <Footer />
    </>
  );
}

// The top-level component with Router
function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
