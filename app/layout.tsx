import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://asahi-kurosu-portfolio.vercel.app"),
  title: {
    default: "黒須朝陽｜フロントエンドエンジニア ポートフォリオ",
    template: "%s｜黒須朝陽 Portfolio",
  },
  description:
    "デザイン感覚とAI活用を強みに、Next.js・TypeScriptを中心にWebアプリを制作する黒須朝陽のポートフォリオです。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "黒須朝陽 Portfolio",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
