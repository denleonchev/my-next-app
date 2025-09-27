"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { AuthNavigation } from "./navigation";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState("");
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header style={{
          backgroundColor: "lightblue",
          padding: "1rem",
          color: "black",
        }}>
          <p>Header</p>
          <AuthNavigation />
        </header>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type something..." />
        <h1>Auth</h1>
        {children}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
            color: "black",
          }}
        >
          <p>
            Footer
          </p>
        </footer>
      </body>
    </html>
  );
}
