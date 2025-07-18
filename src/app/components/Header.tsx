'use client';

import Link from 'next/link';
import ThemeButton from './ThemeButton';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projetos' },
    { href: '/aboutMe', label: 'Sobre' },
    { href: '/contact', label: 'Contato' },
  ];

  return (
    <header className="w-full flex justify-between items-center px-6 md:px-20 py-4 bg-[#A0D9B4] dark:bg-[#0D201F] shadow-lg">
      {/* Logo */}
      <p className="font-think text-black dark:text-white text-xl">Álvaro Luís</p>

      {/* Menu Desktop */}
      <nav className="hidden md:flex gap-12">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`text-black dark:text-white hover:text-cyan-500 transition-colors duration-300
                ${isActive ? 'border-b-2 border-cyan-500 font-semibold' : ''}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Botão Tema + Menu Hamburguer */}
      <div className="flex items-center gap-4">
        <ThemeButton />
        {/* Botão hamburguer só aparece no mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black dark:text-white"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#A0D9B4] dark:bg-[#0D201F] flex flex-col items-center gap-6 py-6 md:hidden z-50 shadow-md">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-lg text-black dark:text-white hover:text-cyan-500 transition-colors duration-300
                  ${isActive ? 'border-b-2 border-cyan-500 font-semibold' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
