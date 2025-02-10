import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false); // Scrolling down
    } else {
      setVisible(true); // Scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`flex justify-center w-screen h-16 bg-darkGray fixed transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="flex space-x-10 items-center text-cream">
        <a href="#home" className="text-lg hover:bg-cream hover:px-2 hover:text-brown hover:rounded-md">Home</a>
        <a href="#contact" className="text-lg hover:bg-cream hover:px-2 hover:text-brown hover:rounded-md">Projects</a>
        <a href="#about" className="text-lg hover:bg-cream hover:px-2 hover:text-brown hover:rounded-md">About</a>
        <a href="#contact" className="text-lg hover:bg-cream hover:px-2 hover:text-brown hover:rounded-md">Contact</a>
      </nav>
    </div>
  );
};

export default NavBar;
