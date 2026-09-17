import { PortfolioPage } from "@/components/portfolio/portfolio-page";

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
