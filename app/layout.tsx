import type { Metadata } from "next";

import "./style.css";
import { handjet } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL ? process.env.BASE_URL : ""),
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={handjet.className}>{children}</body>
    </html>
  );
}
