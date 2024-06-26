import type { Metadata } from "next";

import "./style.css";
import { handjet } from "./fonts";

export const fetchCache = "force-no-store";
export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: process.env.BASE_URL ? new URL(process.env.BASE_URL) : null,
  title: "OBS clock overlay",
  description: "OBS clock overlay For me :)",
  openGraph: {
    type: "website",
    title: "OBS clock overlay",
    description: "OBS clock overlay For me :)",
    url: "/",
    images: [
      {
        url: "/image.png",
        width: "1200",
        height: "628",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={handjet.className} style={{ background: "transparent" }}>
        {children}
      </body>
    </html>
  );
}
