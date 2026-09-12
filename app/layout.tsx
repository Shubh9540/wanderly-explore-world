import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wanderly - Explore the World",
  description: "Wanderly provides the best travel experiences, tours, and travel agency services to explore the world.",
  icons: {
    icon: '/main logo/logo.png',
    shortcut: '/main logo/logo.png',
    apple: '/main logo/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
