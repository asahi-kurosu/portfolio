import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkDetailPage, type WorkSlug } from "@/components/portfolio/work-detail-page";

const slugs = new Set<WorkSlug>(["mykitchen", "mogumogu"]);

const workMetadata: Record<
  WorkSlug,
  { title: string; description: string; image: string; width: number; height: number }
> = {
  mykitchen: {
    title: "MyKitchen｜レシピ管理Webアプリ",
    description:
      "Next.js・TypeScript・Prismaで開発した、レシピ登録から買い物リスト作成までを支援するWebアプリの制作実績です。",
    image: "/portfolio-assets/work-2.png",
    width: 2386,
    height: 1542,
  },
  mogumogu: {
    title: "もぐもぐパン｜WordPress練習用サイト",
    description:
      "WordPress・Vite・Dockerを使い、架空のパン屋を題材にデザインから実装まで行ったWebサイトの制作実績です。",
    image: "/portfolio-assets/work-1.png",
    width: 1368,
    height: 962,
  },
};

export function generateStaticParams() {
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!slugs.has(slug as WorkSlug)) return {};

  const work = workMetadata[slug as WorkSlug];
  const canonical = `/works/${slug}`;

  return {
    title: work.title,
    description: work.description,
    alternates: { canonical },
    openGraph: {
      title: `${work.title}｜黒須朝陽 Portfolio`,
      description: work.description,
      url: canonical,
      images: [
        {
          url: work.image,
          width: work.width,
          height: work.height,
          alt: work.title,
        },
      ],
    },
    twitter: {
      title: `${work.title}｜黒須朝陽 Portfolio`,
      description: work.description,
      images: [work.image],
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!slugs.has(slug as WorkSlug)) notFound();

  return <WorkDetailPage slug={slug as WorkSlug} />;
}
