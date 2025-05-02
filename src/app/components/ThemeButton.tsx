"use client";

import { useEffect, useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function ThemeButton(){
    const [theme, setTheme] = useState(()=> localStorage.getItem('theme')||'light');
    
    useEffect(()=> {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    },[theme]);

    return (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded bg-[#FFFFFF] dark:bg-[#0D201F] absolute right-14 top-14 border-1 border-[#3F3D3D]"
        >
          {theme === 'dark' ? <DarkModeIcon/> : <LightModeIcon/>}
        </button>
      );
};
