
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noma",
  description: "A real-time chat platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
