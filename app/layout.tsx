import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "黒須朝陽 Portfolio",
  description: "AIネイティブなフロントエンドエンジニア志望のポートフォリオ",
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
