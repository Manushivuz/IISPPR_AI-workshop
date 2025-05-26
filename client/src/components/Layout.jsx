import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AIChatButton from './AIChatButton';
import ContactButton from './ContactButton';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <Outlet />
      <Footer />
      <AIChatButton />
      <ContactButton />
    </div>
  );
};

export default Layout; 