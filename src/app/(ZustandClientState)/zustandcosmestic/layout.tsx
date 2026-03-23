import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: "FashionSwap",
  description: "Community platform for swapping fast fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
       {children}
      </body>
    </html>
  );
}
