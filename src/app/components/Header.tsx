'use client';

import Link from 'next/link';
import ThemeButton from './ThemeButton';

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-20 py-4 bg-[#0D201F] shadow-lg">
      <p className="font-think text-[#FFFFFF]">Álvaro Luís</p>
      <nav className="flex gap-12">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-think text-[#FFFFFF] hover:text-cyan-500"
        >
          Home
        </Link>
        <Link
          href="/aboutMe"
          className="inline-flex items-center text-sm font-think text-[#FFFFFF] hover:text-cyan-500"
        >
          Sobre Mim
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-think text-[#FFFFFF] hover:text-cyan-500"
        >
          Projetos
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center text-sm font-think text-[#FFFFFF] hover:text-cyan-500"
        >
          Contato
        </Link>
      </nav>
      <ThemeButton />
    </header>
  );
}
