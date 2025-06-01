'use client';

import Link from 'next/link';
import ThemeButton from './ThemeButton';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projetos' },
    { href: '/aboutMe', label: 'Sobre' },
    { href: '/contact', label: 'Contato' },
  ];

  return (
    <header className="w-full flex justify-between items-center px-20 py-4 bg-[#A0D9B4] dark:bg-[#0D201F] shadow-lg">
      <p className="font-think text-black dark:text-white">Álvaro Luís</p>
      <nav className="flex gap-12">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`
                text-black dark:text-white 
                hover:text-cyan-500 transition-colors duration-300
                ${isActive ? 'border-b-2 border-cyan-500 font-semibold' : ''}
              `}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <ThemeButton />
    </header>
  );
}
