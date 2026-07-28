'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isDark, setIsDark] = useState(true);
    const [mounted, setMounted] = useState(false);

    // Synchronize tema saat web pertama kali di-load
    useEffect(() => {
        setMounted(true);
        const root = document.documentElement;
        const savedTheme = localStorage.getItem('theme');

        // Cek localStorage atau class yang sudah ada di tag <html>
        if (savedTheme === 'light' || (!savedTheme && !root.classList.contains('dark'))) {
            root.classList.remove('dark');
            setIsDark(false);
        } else {
            root.classList.add('dark');
            setIsDark(true);
        }
    }, []);

    // Fungsi Toggle yang dipastikan memicu reflow DOM
    const toggleTheme = () => {
        const root = document.documentElement;
        const isCurrentlyDark = root.classList.contains('dark');

        if (isCurrentlyDark) {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-[#0B1120]/90 backdrop-blur-md transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* LOGO HYBRID ADAPTIVE */}
                <Link
                    href="https://grafologiindonesia.com"
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-3.5 group"
                >
                    <svg className="w-10 h-11 shrink-0 drop-shadow-sm group-hover:scale-105 transition-transform duration-200" viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 2 L95 18 L95 45 C95 75 50 112 50 112 C50 112 5 75 5 45 L5 18 Z" fill="#4A1E78" />
                        <polygon points="50,8 75,17 50,26 25,17" fill="#FBB03B" />
                        <path d="M16 28 L50 40 L84 28 L84 46 C84 70 50 98 50 98 C50 98 16 70 16 46 Z" fill="#F5F3F7" />
                        <circle cx="50" cy="58" r="11" fill="#4A1E78" />
                        <path d="M44 65 L44 112 L56 112 L56 65 Z" fill="#4A1E78" />
                    </svg>

                    <div className="flex flex-col justify-center">
                        <span className="text-[1.05rem] font-extrabold tracking-wide leading-tight text-[#4A1E78] dark:text-white transition-colors duration-300">
                            LKP GRAFOLOGI INDONESIA
                        </span>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                            Lembaga Resmi Berstandar Internasional
                        </span>
                    </div>
                </Link>

                {/* HEADER ACTIONS */}
                <div className="flex items-center gap-3">

                    <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-sm transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                        <span>Angkatan 2026 Dibuka</span>
                    </div>

                    {/* Theme Switcher Button dengan pencegahan Hydration Error */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white shadow-sm transition-all cursor-pointer"
                    >
                        {!mounted ? (
                            // Fallback saat server rendering
                            <span className="text-sm">🌙 Mode Gelap</span>
                        ) : (
                            <>
                                <span className="text-sm leading-none">{isDark ? '☀️' : '🌙'}</span>
                                <span className="hidden md:inline">{isDark ? 'Mode Terang' : 'Mode Gelap'}</span>
                            </>
                        )}
                    </button>

                </div>

            </div>
        </header>
    );
}