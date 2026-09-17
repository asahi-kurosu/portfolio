import type { Metadata } from "next";
import { PortfolioPage } from "@/components/portfolio/portfolio-page";

const title = "黒須朝陽｜フロントエンドエンジニア ポートフォリオ";
const description =
  "デザイン感覚とAI活用を強みに、Next.js・TypeScriptを中心にWebアプリを制作する黒須朝陽のポートフォリオです。";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    images: [
      {
        url: "/portfolio-assets/hero-cropped.png",
        width: 1040,
        height: 720,
        alt: "黒須朝陽のポートフォリオ",
      },
    ],
  },
  twitter: {
    title,
    description,
    images: ["/portfolio-assets/hero-cropped.png"],
  },
};

export default function Home() {
  return (
    <>
      <iframe
        id="desktop-baseline"
        src="/desktop-baseline"
        title="黒須朝陽 Portfolio"
      />
      <div id="mobile-portfolio">
        <PortfolioPage />
      </div>
    </>
  );
}
