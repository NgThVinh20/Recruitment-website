import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Project-6",
  description: "Dự án tuyển dụng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body >
        <Header/> 
        {children}
      </body>
    </html>
  );
}
