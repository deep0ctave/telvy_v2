import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Drawer from './Drawer.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';

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
  const hideSidebarRoutes = ["/quiz","/about"];
  const showSidebar = !hideSidebarRoutes.includes(location.pathname);

  return (
    <>
      <Drawer showSidebar={showSidebar}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
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
