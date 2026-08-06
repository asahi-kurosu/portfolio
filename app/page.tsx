const LEGACY_ORIGIN =
  "https://portfolio-l2cs3s6so-kurosuasahi-1792s-projects.vercel.app";

function extractBody(html: string) {
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";

  return body
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replaceAll('src="/', `src="${LEGACY_ORIGIN}/`)
    .replaceAll('srcSet="/', `srcSet="${LEGACY_ORIGIN}/`)
    .replaceAll('srcset="/', `srcset="${LEGACY_ORIGIN}/`)
    .replaceAll('href="/_next/', `href="${LEGACY_ORIGIN}/_next/`)
    .replace(
      "</header>",
      `</header><nav class="mobile-nav" aria-label="スマートフォン用ナビゲーション"><a href="#about">About</a><a href="#works">Works</a><a href="#skills">Skills</a><a href="#career">Career</a><a href="#contact">Contact</a></nav>`,
    );
}

export default async function Home() {
  const response = await fetch(LEGACY_ORIGIN, { cache: "force-cache" });

  if (!response.ok) {
    throw new Error("基準となるポートフォリオを取得できませんでした。");
  }

  const body = extractBody(await response.text());

  return (
    <>
      <iframe
        id="desktop-baseline"
        src={LEGACY_ORIGIN}
        title="黒須朝陽 Portfolio"
      />
      <div id="legacy-home" dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
