import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Zagreus",
  description: "The first ever privacy bridge dedicated entirely to reducing fees while rewarding holders. With Zagreus you can swap and send tokens privately through our Zagswap token swap or participate in rev share opportunities with our Zagshare NFT’s and Zagpoint rewards network.",
  icons: [{ rel: "icon", url: "/logo/logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} bg-[#0F0F11]`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&family=Sarpanch:wght@400;500;600;700;800;900&family=Share+Tech&family=Share+Tech+Mono&family=Sofia+Sans:ital,wght@0,1..1000;1,1..1000&family=Teko:wght@300..700&family=WindSong:wght@400;500&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
