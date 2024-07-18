import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import Nav from "./components/nav";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bug Tracker",
  description: "A simple web app for tracking bugs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
