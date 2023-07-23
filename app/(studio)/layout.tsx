import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ananda Stones Studio",
  description: "Admin panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
