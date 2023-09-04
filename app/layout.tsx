import type { Metadata } from "next";

import "./style.css";
import { handjet } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://unishigure.github.io/obs-clock-overlay/"),
  title: "OBS clock overlay",
  description: "OBS clock overlay For me :)",
  openGraph: {
    type: "website",
    images: "/image.png",
  },
  twitter: {
    images: "/image.png",
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
