import type { Metadata } from "next";

import "./style.css";
import { handjet } from "./fonts";

export const metadata: Metadata = {
  title: "OBS clock overlay",
  description: "OBS clock overlay For me :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <Meta />
      <body className={handjet.className}>{children}</body>
    </html>
  );
}

function Meta() {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://unishigure.github.io/obs-clock-overlay/"
      />
      <meta property="og:title" content="OBS clock overlay" />
      <meta property="og:description" content="OBS clock overlay For me :)" />
      <meta
        property="og:image"
        content="../public/image.png"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://unishigure.github.io/obs-clock-overlay/"
      />
      <meta property="twitter:title" content="OBS clock overlay" />
      <meta
        property="twitter:description"
        content="OBS clock overlay For me :)"
      />
      <meta
        property="twitter:image"
        content="../public/image.png"
      />
      {/* Meta Tags Generated with https://metatags.io */}
    </>
  );
}
