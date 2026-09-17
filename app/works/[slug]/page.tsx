import { notFound } from "next/navigation";
import { WorkDetailPage, type WorkSlug } from "@/components/portfolio/work-detail-page";

const slugs = new Set<WorkSlug>(["mykitchen", "mogumogu"]);

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!slugs.has(slug as WorkSlug)) notFound();

  return (
    <>
      <iframe
        id="desktop-baseline"
        src={`/desktop-baseline/works/${slug}`}
        title={`${slug} 制作実績`}
      />
      <div id="mobile-portfolio">
        <WorkDetailPage slug={slug as WorkSlug} />
      </div>
    </>
  );
}
