import React from 'react';

export default function HeroSection() {
    return (
        <section className="relative flex-1 flex items-center py-16 px-6 overflow-hidden z-10 bg-slate-50 dark:bg-[#0B1120] transition-colors duration-300">

            {/* Container Grid 2 Kolom (Split-Screen) */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* KOLOM KIRI: COPYWRITING & PERSUASIVE ENGINE (7 Kolom) */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">

                    {/* Top Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
                        <span>★ Comprehensive Course • Sertifikasi Resmi</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-slate-900 dark:text-white leading-[1.18] tracking-tight mb-6">
                        Jadilah Profesional yang Mampu Melihat Lebih Dalam dengan{' '}
                        <span className="text-amber-500 underline decoration-sky-400 decoration-4 underline-offset-8">
                            Sertifikasi CHA
                        </span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl font-normal">
                        Banyak keputusan penting dalam rekrutmen, konseling, dan pendidikan bergantung pada seberapa akurat Anda memahami manusia. Kuasai secara terstruktur <strong className="text-slate-900 dark:text-white font-semibold">100+ indikator grafologi kepribadian</strong> dan raih gelar internasional <strong className="text-slate-900 dark:text-white font-semibold">Certified Handwriting Analyst (CHA)</strong>.
                    </p>

                    {/* DUAL-CTA BUTTONS (Kontras Sempurna di Dark/Light Mode) */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
                        <a
                            href="#daftar"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-base shadow-lg shadow-amber-500/20 hover:-translate-y-0.5 transition-all duration-200"
                        >
                            <span>Daftar Sertifikasi Sekarang</span>
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>

                        {/* Tombol Sekunder yang diperbaiki kontrasnya */}
                        <a
                            href="#kurikulum"
                            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white dark:bg-[#1E293B] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold text-base border border-slate-300 dark:border-slate-700 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                        >
                            <span>Lihat Kurikulum & Modul</span>
                        </a>
                    </div>

                    {/* TRUST INDICATORS */}
                    <div className="w-full pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span>13+ Buku & Modul Resmi</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span>20x Webinar Pembimbingan</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span>Akses Member Area Seumur Hidup</span>
                        </div>
                    </div>

                </div>

                {/* KOLOM KANAN: VISUAL CREDIBILITY & SOLID CARDS (5 Kolom) */}
                <div className="lg:col-span-5 flex justify-center relative mt-8 lg:mt-0">

                    <div className="relative w-full max-w-md">

                        {/* Floating Badge 1 (Top Right) */}
                        <div className="absolute -top-6 -right-4 z-20 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700/80 border-l-4 border-l-amber-500 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 font-extrabold flex items-center justify-center text-lg shrink-0">✓</div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">100+ Traits Terukur</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Dalam 10 Aspek Psikologis</p>
                            </div>
                        </div>

                        {/* Main Certificate Representation Card (Solid Clean SaaS Style) */}
                        <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700/80 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden text-center transition-colors">

                            {/* Top Accent Bar */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-sky-400"></div>

                            {/* Badge Icon */}
                            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-500 inline-flex items-center justify-center mb-5">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                            </div>

                            <div className="text-xs uppercase font-bold tracking-widest text-slate-400 dark:text-slate-400 mb-1">Standar Kompetensi Internasional</div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1.5">Certified Handwriting Analyst</h3>
                            <div className="text-sm font-bold text-sky-500 dark:text-sky-400 mb-6">( Gelar Profesional CHA )</div>

                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                Sertifikasi resmi untuk profesional HRD, Psikolog, Pendidik, Konselor, dan Coach dalam analisis kepribadian objektif.
                            </p>

                            <hr className="border-slate-200 dark:border-slate-700/80 mb-6" />

                            {/* Grid Spesifikasi Mini */}
                            <div className="grid grid-cols-2 gap-3 text-left">
                                <div className="bg-slate-50 dark:bg-[#0F172A] p-3 rounded-xl border border-slate-200/80 dark:border-slate-800">
                                    <span className="block text-[0.7rem] text-slate-500 dark:text-slate-400 font-medium">Metode Pengukuran</span>
                                    <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">Slant & Zona Ilmiah</span>
                                </div>
                                <div className="bg-slate-50 dark:bg-[#0F172A] p-3 rounded-xl border border-slate-200/80 dark:border-slate-800">
                                    <span className="block text-[0.7rem] text-slate-500 dark:text-slate-400 font-medium">Output Profesional</span>
                                    <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">GHA & VHA Reports</span>
                                </div>
                            </div>

                        </div>

                        {/* Floating Badge 2 (Bottom Left) */}
                        <div className="absolute -bottom-6 -left-4 z-20 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700/80 border-l-4 border-l-sky-400 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-500 font-extrabold flex items-center justify-center text-lg shrink-0">★</div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">LKP Resmi Diakui</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Bimbingan & Komunitas Aktif</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}