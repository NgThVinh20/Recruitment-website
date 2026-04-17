import type { Metadata } from "next";
import "./globals.css";

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
    <html 
      lang="vi" suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
