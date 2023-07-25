import "../globals.css";
import type { Metadata } from "next";

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
      <body className="transition duration-500 ease-in-out">
        <main className="max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
