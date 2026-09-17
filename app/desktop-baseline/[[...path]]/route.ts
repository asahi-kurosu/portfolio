import type { NextRequest } from "next/server";

const DESKTOP_ORIGIN =
  "https://portfolio-l2cs3s6so-kurosuasahi-1792s-projects.vercel.app";

function prepareDesktopHtml(html: string) {
  const withAbsoluteAssets = html
    .replaceAll('src="/_next/', `src="${DESKTOP_ORIGIN}/_next/`)
    .replaceAll('href="/_next/', `href="${DESKTOP_ORIGIN}/_next/`)
    .replaceAll('src="/portfolio-assets/', `src="${DESKTOP_ORIGIN}/portfolio-assets/`);

  const navigationBridge = `
    <base href="${DESKTOP_ORIGIN}/">
    <style>
      html, body, body * { cursor: auto !important; }
      a, button, [role="button"], input, select, textarea, summary {
        cursor: pointer !important;
      }
      :where(a, button, input, select, textarea, summary):focus-visible {
        border-radius: 6px;
        outline: 3px solid #2e6ea6 !important;
        outline-offset: 4px;
      }
    </style>
    <script>
      document.addEventListener("click", function (event) {
        var target = event.target;
        var anchor = target && target.closest ? target.closest("a[href]") : null;
        if (!anchor) return;

        var rawHref = anchor.getAttribute("href");
        if (!rawHref || rawHref.charAt(0) === "#") return;

        event.preventDefault();
        event.stopImmediatePropagation();

        var url = new URL(rawHref, "${DESKTOP_ORIGIN}/");
        var destination = url.origin === "${DESKTOP_ORIGIN}"
          ? url.pathname + url.search + url.hash
          : url.href;
        window.top.location.assign(destination);
      }, true);
    </script>`;

  return withAbsoluteAssets.replace("<head>", `<head>${navigationBridge}`);
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> },
) {
  const { path = [] } = await params;
  const pathname = path.length ? `/${path.join("/")}` : "/";
  const response = await fetch(`${DESKTOP_ORIGIN}${pathname}`, {
    next: { revalidate: 86400 },
  });

  if (!response.ok) {
    return new Response("Desktop view could not be loaded.", {
      status: response.status,
    });
  }

  return new Response(prepareDesktopHtml(await response.text()), {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
