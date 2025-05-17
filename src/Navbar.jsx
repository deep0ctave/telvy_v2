import { useEffect, useState } from 'react';
import React from "react";

// Logo Component
const Logo = () => (
  <div className="mx-2 flex-1 text-xl font-bold lg:hidden">Telvy</div>
);

//Theme Controller
const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // Apply theme on mount and when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'synthwave' : 'light'));
  };

  return (
    <label className="toggle text-base-content cursor-pointer">
      <input
        type="checkbox"
        checked={theme === 'synthwave'}
        onChange={toggleTheme}
        className="theme-controller"
      />
      {/* Sun icon */}
      <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
        </g>
      </svg>
      {/* Moon icon */}
      <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </g>
      </svg>
    </label>
  );
};


// LanguageSelector Component
const languages = [
  { code: 'EN', label: 'English' },
  { code: 'AR', label: 'العربية' },
  { code: 'BN', label: 'বাংলা' },
  // Add more languages here
];

const LanguageSelector = () => {
  const [lang, setLang] = useState('EN');

  return (
    <div className="dropdown dropdown-end">
      {/* Button to toggle dropdown */}
      <div
        tabIndex={0}
        role="button"
        className="btn btn-sm btn-ghost gap-1 px-1.5 text-[.5625rem] font-bold"
        aria-label="Language"
        title="Change Language"
      >
        <svg
          className="text-base-content/70 size-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
            d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9S14.761 3 12 3m0 18c-2.761 0-3.941-5.163-3.941-9S9.239 3 12 3M3.5 9h17m-17 6h17"
          />
        </svg>
        <svg
          className="mt-px hidden size-2 fill-current opacity-60 sm:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>

      {/* Dropdown content */}
      <div
        tabIndex={0}
        className="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 h-[30.5rem] max-h-[calc(100vh-8.6rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline-1 outline-black/5"
      >
        <ul className="menu menu-sm w-full">
          {languages.map(({ code, label }) => (
            <li key={code}>
              <button
                onClick={() => setLang(code)}
                className={`
                  ${lang === code ? 'menu-active bg-base-300 font-bold' : ''}
                  flex justify-between w-full
                `}
              >
                <span className="pe-4 font-mono text-[.5625rem] font-bold tracking-[0.09375rem] opacity-40">
                  {code}
                </span>
                <span className="font-[sans-serif]">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


// Main Navbar Component
const Navbar = () => {
  return (
    <div className="navbar navbar bg-base-300 sticky top-0 z-30 h-16 px-4">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
      </div>

      {/* Logo */}
      <Logo />

      {/* Right side */}
      <div className="flex-none flex items-center gap-2 ml-auto">
        <ThemeToggle />
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Navbar;
