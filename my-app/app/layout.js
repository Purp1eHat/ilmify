import { Geist, Geist_Mono } from "next/font/google";

import { Style } from "@mui/icons-material";
import App from './page';
import Head from "next/head";
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "منصه علمفاي ",
  description: "رفيقك الذكي في رحله التعلم",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">

      <body className={`${geistSans.variable} ${geistMono.variable}` }>
        {children}
      </body>
    </html>
  );
}
