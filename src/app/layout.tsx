import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta"
});

export const metadata: Metadata = {
  title: "Comprehensive Course  Sertifikasi Grafologi CHA",
  description: "Lembaga Resmi Berstandar Internasional LKP Grafologi Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Kita pasang class "dark" sebagai awal, nanti di-override oleh Header.tsx jika user minta light
    <html lang="id" className="dark">
      <body className={`${jakarta.className} antialiased bg-slate-50 text-slate-900 dark:bg-[#0B1120] dark:text-slate-50 transition-colors duration-300 min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}