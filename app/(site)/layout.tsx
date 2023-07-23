import "../globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ananda Stones",
  description: "Hitta din sten",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto py-10 px-2 md:mx-10">
        <nav className="mx-4">
          <Link
            href="/"
            className="text-xl font-extrabold drop-shadow bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent"
          >
            Ananda Stones
          </Link>
        </nav>
        <main className="py-6 md:py-20">{children}</main>
      </body>
    </html>
  );
}
