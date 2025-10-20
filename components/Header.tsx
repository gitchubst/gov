import React, { useState } from 'react';
import { Page, NavItem } from '../types';

interface HeaderProps {
  navItems: NavItem[];
  activePage: Page;
  setActivePage: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ navItems, activePage, setActivePage }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-campaign-blue shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('Home'); }} className="text-white">
              <h1 className="text-2xl font-bold font-serif tracking-wider">Shantanu Tiwari</h1>
              <p className="text-sm font-sans uppercase text-gray-300">For President 2028</p>
            </a>
          </div>
          <nav className="hidden md:flex h-full">
            <div className="ml-10 flex items-stretch space-x-1">
              {navItems.map((item) => {
                if (typeof item === 'string') {
                  return (
                    <a
                      key={item}
                      href="#"
                      onClick={(e) => { e.preventDefault(); setActivePage(item); }}
                      className={`flex items-center px-4 text-lg font-medium transition-all duration-300 border-b-4 ${activePage === item ? 'border-campaign-red text-white' : 'border-transparent text-gray-300 hover:border-campaign-light-blue hover:text-white'}`}
                    >
                      {item}
                    </a>
                  );
                } else {
                  return (
                    <div
                      key={item.title}
                      className="relative flex"
                      onMouseEnter={() => setOpenDropdown(item.title)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button className={`flex items-center px-4 text-lg font-medium transition-all duration-300 border-b-4 focus:outline-none border-transparent text-gray-300 hover:border-campaign-light-blue hover:text-white`}>
                        {item.title}
                        <svg className={`w-4 h-4 ml-2 transition-transform duration-200 ${openDropdown === item.title ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </button>
                      {openDropdown === item.title && (
                        <div className="absolute top-full left-0 mt-0 w-56 rounded-b-md shadow-lg bg-white">
                          {item.children.map((child) => (
                            <a
                              key={child}
                              href="#"
                              onClick={(e) => { e.preventDefault(); setActivePage(child); setOpenDropdown(null); }}
                              className={`block px-4 py-3 text-lg transition-colors duration-200 ${activePage === child ? 'text-white bg-campaign-red' : 'text-campaign-dark'} hover:bg-campaign-red hover:text-white`}
                            >
                              {child}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
              })}
            </div>
          </nav>
        </div>
      </div>
       {/* Mobile Nav could be added here if needed */}
    </header>
  );
};