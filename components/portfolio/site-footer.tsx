import Image from "next/image";
import Link from "next/link";

const footerItems = ["Top", "About", "Works", "Skills", "Career", "Contact"];

const tones = {
  // TOP page: white on the pink page background.
  light: "border-white text-white",
  // Work detail pages: pink on the cream article.
  pink: "border-[#db8a9d] text-[#db8a9d]",
};

export function SiteFooter({
  tone = "light",
  hrefBase = "",
  className = "",
}: {
  tone?: keyof typeof tones;
  /** "" for in-page anchors on the TOP page, "/" from other pages. */
  hrefBase?: "" | "/";
  className?: string;
}) {
  const hrefFor = (item: string) =>
    item === "Top" ? hrefBase || "#" : `${hrefBase}#${item.toLowerCase()}`;

  return (
    <footer className={`font-display font-black ${className}`}>
      <div className={`border-t-[3px] pt-5 lg:pt-4 ${tones[tone]}`}>
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-8">
          <Link
            href={hrefFor("Top")}
            aria-label="トップへ戻る"
            className="relative block h-[51px] w-[96px] shrink-0 lg:h-[78px] lg:w-[148px]"
          >
            {/* logo.png has wide transparent margins; crop to the illustration like the Figma footer. */}
            <Image
              src="/portfolio-assets/logo.png"
              alt=""
              fill
              sizes="148px"
              className="object-cover"
            />
          </Link>
          <nav
            aria-label="フッターナビゲーション"
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[14px] lg:flex-1 lg:flex-nowrap lg:justify-end lg:gap-0 lg:text-[22px]"
          >
            {footerItems.map((item) => (
              <Link
                key={item}
                href={hrefFor(item)}
                className="lg:flex lg:h-[45px] lg:items-center lg:border-l-2 lg:border-current lg:px-5 lg:first:border-l-0 lg:last:pr-0"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-4 text-center text-[12px] lg:mt-1 lg:text-[22px]">
          © 2026 ASAHI KUROSU
        </div>
      </div>
    </footer>
  );
}
