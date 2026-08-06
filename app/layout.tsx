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
      <head>
        <link
          rel="stylesheet"
          href="https://portfolio-l2cs3s6so-kurosuasahi-1792s-projects.vercel.app/_next/static/chunks/3cpiwgtpt9jjf.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
