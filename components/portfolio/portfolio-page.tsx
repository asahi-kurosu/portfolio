import Image from "next/image";

const navItems = ["About", "Works", "Skills", "Career", "Contact"];

const strengths = [
  { label: "AIと開発", color: "bg-[#bbe2f6]" },
  { label: "視覚デザイン", color: "bg-[#fff9a6]" },
  { label: "フロントエンド", color: "bg-[#cb8adb]" },
  { label: "UI/UX 改善", color: "bg-[#a68adb]" },
  { label: "イラスト", color: "bg-[#ffc97e]" },
  { label: "世界観づくり", color: "bg-[#7ec1ff]" },
];

const features = [
  {
    title: "数字で語れる成果",
    copy: "新卒で配属されたセールスチームで、テレアポ獲得率を改善。",
    badge: "19.8% → 40.7%",
    tape: "right",
  },
  {
    title: "AI ネイティブな開発スタイル",
    copy: "Codex / Claude Code を活用し、高速で開発＆改善。",
    tags: ["Next.js", "TypeScript", "Prisma", "Vercel Blob", "Playwright", "..."],
  },
  {
    title: "デザイン感覚",
    copy: "イラスト制作で培った視覚デザイン感覚で、UIの伝わりやすさを意識した開発が得意です。",
    image: "pet-2.png",
    tape: "right",
  },
];

const works = [
  {
    title: "MyKitchen - レシピ管理 Web アプリ",
    body: "日々の料理、買い物、レシピの保存をまとめて扱える個人開発アプリです。",
    image: "work-1.png",
    tags: ["Next.js", "TypeScript", "Prisma", "Playwright"],
  },
  {
    title: "ポートフォリオ - Works Frame 再現",
    body: "Figmaの世界観をもとに、静的UIとして再構成したポートフォリオです。",
    image: "work-2.png",
    tags: ["Figma MCP", "Tailwind CSS", "App Router"],
  },
];

const skillGroups = [
  ["Frontend", "Next.js / React / TypeScript / Tailwind CSS"],
  ["Backend / DB", "Prisma / PostgreSQL / Auth.js"],
  ["Tools", "Vercel / Playwright / GitHub"],
  ["Design", "Figma / UI Review / Illustration"],
];

const careerCards = [
  { label: "個人アポ率", before: "19.8%", after: "40.7%" },
  { label: "チームアポ率", before: "17.3%", after: "32.3%" },
  { label: "改善の仕組み化", before: "OJT", after: "Manual" },
];

const contactLinks = [
  ["Live Demo", "https://app-my-recipe.vercel.app/"],
  ["公開リポジトリ", "https://github.com/ohiromeya-web-hands-on/app_my-recipe"],
  ["GitHub", "https://github.com/asahi-kurosu"],
  ["メール", "mailto:kurosu.asahi@gmail.com"],
];

function asset(name: string) {
  return `/portfolio-assets/${name}`;
}

function SectionTitle({
  children,
  color = "text-[#db8a9d]",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div className="mb-5">
      <h2 className={`font-display text-[34px] font-black leading-none ${color}`}>
        {children}
      </h2>
      <div className="mt-3 h-[5px] w-[86px] rounded-full bg-[#866452]" />
    </div>
  );
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={asset("logo.png")}
        alt=""
        width={compact ? 82 : 132}
        height={compact ? 44 : 70}
        className={compact ? "h-auto w-[74px]" : "h-auto w-[132px]"}
        priority={!compact}
      />
      {!compact && (
        <p className="font-display text-[22px] font-black leading-[1.05] text-[#4c8ec5]">
          ASAHI
          <br />
          KUROSU
        </p>
      )}
    </div>
  );
}

function Header() {
  return (
    <header className="h-[90px] bg-[#bbe2f6]">
      <div className="mx-auto flex h-full max-w-[1080px] items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-7 font-display text-[19px] font-black text-[#4c8ec5] md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[610px] overflow-hidden px-8 pt-8">
      <div className="speech-bubble absolute left-[54px] top-[48px] z-10 w-[590px] rotate-[-2deg] bg-white px-12 py-8">
        <p className="font-display text-[36px] font-black leading-[1.18] text-[#db8a9d]">
          <span className="marker-line">デザイン感覚 × AI ネイティブで、</span>
          <br />
          現代的なフロント開発に挑む
        </p>
      </div>

      <div className="absolute left-[82px] top-[205px] z-20 rotate-[-4deg] rounded-[28px] border-[6px] border-white bg-[#4c8ec5] px-10 py-4 text-white">
        <p className="font-display text-[25px] font-black leading-[1.25]">
          フロントエンドエンジニア志望！
          <br />
          黒須朝陽（くろす あさひ）
        </p>
      </div>

      <div className="absolute right-[68px] top-[65px] h-[500px] w-[710px]">
        <Image
          src={asset("hero.png")}
          alt="スケートボードに乗る人物と犬のイラスト"
          fill
          sizes="710px"
          className="object-contain object-center"
          priority
        />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative px-8 pb-9">
      <div className="grid grid-cols-[1.95fr_1fr] gap-8">
        <div className="blob-about relative min-h-[330px] bg-white px-16 py-12">
          <span className="tape tape-green left-10 top-5 rotate-[-10deg]" />
          <SectionTitle>About</SectionTitle>
          <div className="grid grid-cols-[170px_1fr] items-center gap-10">
            <Image
              src={asset("logo.png")}
              alt=""
              width={220}
              height={120}
              className="w-[170px] object-contain"
            />
            <p className="max-w-[520px] text-[15px] font-black leading-[1.68] text-[#603d23]">
              AIマーケティング会社の inglow に新卒入社し、セールスチームや
              YouTube グロースチームを経て、現在は Codex / Claude Code
              を主軸にした AI ネイティブなスタイルで Next.js + TypeScript
              の Web アプリを継続開発しています。イラストで培った視覚感覚を
              AI 出力のレビューに活かしながら、現代的なフロント開発に挑んでいきます。
            </p>
          </div>
        </div>

        <div className="blob-skill relative min-h-[330px] bg-white px-8 py-10">
          <span className="tape tape-pink right-8 top-3 rotate-[20deg]" />
          <h3 className="mx-auto mb-8 flex w-fit rounded-full bg-[#db8a9d] px-8 py-4 font-display text-[24px] font-black text-white">
            得意なこと
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {strengths.map((item) => (
              <span
                key={item.label}
                className={`${item.color} inline-flex min-h-[44px] items-center justify-center rounded-full px-4 text-[15px] font-black text-[#603d23]`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCardsSection() {
  return (
    <section className="relative px-8 pb-16 pt-5">
      <div className="grid grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className={`feature-blob relative min-h-[250px] overflow-hidden bg-white px-9 py-10 ${
              index === 1 ? "translate-y-[-4px]" : ""
            }`}
          >
            {feature.tape && (
              <span className="tape tape-green right-10 top-1 rotate-[8deg]" />
            )}
            <h3 className="mb-5 max-w-[270px] font-display text-[27px] font-black leading-tight text-[#603d23]">
              {feature.title}
            </h3>
            <p className="mb-6 text-[16px] font-black leading-[1.45] text-[#4c8ec5]">
              {feature.copy}
            </p>
            {feature.badge && (
              <div className="inline-flex rounded-[22px] border-[4px] border-[#f1b1c0] px-6 py-3 font-display text-[24px] font-black text-[#db8a9d]">
                {feature.badge}
              </div>
            )}
            {feature.tags && (
              <div className="flex max-w-[290px] flex-wrap gap-3">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#bbe2f6] px-5 py-2 text-[13px] font-black text-[#4c8ec5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {feature.image && (
              <Image
                src={asset(feature.image)}
                alt=""
                width={135}
                height={120}
                className="absolute bottom-0 right-5 w-[122px] object-contain"
              />
            )}
          </article>
        ))}
      </div>
      <div className="bottom-wave" />
    </section>
  );
}

function WorksSection() {
  return (
    <section id="works" className="blue-band px-8 py-12">
      <SectionTitle color="text-[#4c8ec5]">Works</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2">
        {works.map((work) => (
          <article
            key={work.title}
            className="rotate-[-1deg] rounded-[26px] border-4 border-white bg-[#bbe2f6] p-4 odd:rotate-[1deg]"
          >
            <Image
              src={asset(work.image)}
              alt=""
              width={560}
              height={340}
              className="aspect-[16/10] w-full rounded-[18px] border-4 border-white object-cover"
            />
            <h3 className="mt-4 font-display text-[22px] font-black text-[#603d23]">
              {work.title}
            </h3>
            <p className="mt-2 text-[15px] font-black leading-relaxed text-[#4c8ec5]">
              {work.body}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white px-3 py-1.5 text-xs font-black text-[#4c8ec5]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="px-8 py-10">
      <div className="blob-wide bg-white px-10 py-9">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid gap-4 md:grid-cols-4">
          {skillGroups.map(([title, body]) => (
            <article
              key={title}
              className="rounded-[18px] border-[3px] border-[#f1b1c0] p-4"
            >
              <h3 className="mb-2 font-display text-[17px] font-black text-[#db8a9d]">
                {title}
              </h3>
              <p className="text-[13px] font-black leading-relaxed text-[#603d23]">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerSection() {
  return (
    <section id="career" className="blue-band px-8 py-12">
      <SectionTitle color="text-[#4c8ec5]">Career</SectionTitle>
      <p className="mb-5 text-[16px] font-black leading-relaxed text-[#866452]">
        株式会社 inglow / 2023年4月 〜 2024年3月。セールスチームから
        YouTube グロースチームへ異動し、数値改善とチーム展開を経験。
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {careerCards.map((card) => (
          <article
            key={card.label}
            className="rounded-[24px] border-[3px] border-[#d4d4d4] bg-white p-5"
          >
            <h3 className="mb-4 font-display text-[19px] font-black text-[#603d23]">
              {card.label}
            </h3>
            <div className="flex items-center gap-3">
              <MetricBox label="Before" value={card.before} />
              <span className="font-display text-xl font-black text-[#4c8ec5]">
                →
              </span>
              <MetricBox label="After" value={card.after} emphasize />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MetricBox({
  label,
  value,
  emphasize = false,
}: {
  label: string;
  value: string;
  emphasize?: boolean;
}) {
  return (
    <div className="min-w-0 flex-1 rounded-[14px] bg-[#d4d4d4]/60 px-3 py-4 text-center">
      <p className="text-xs font-black text-[#866452]">{label}</p>
      <p
        className={`font-display text-[20px] font-black ${
          emphasize ? "text-[#db8a9d]" : "text-[#f1b1c0]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-8 py-10">
      <div className="blob-wide grid gap-6 bg-white px-10 py-9 md:grid-cols-[1fr_260px]">
        <div>
          <SectionTitle>Contact</SectionTitle>
          <div className="space-y-3">
            {contactLinks.map(([label, href]) => (
              <div
                key={label}
                className="grid gap-2 text-[15px] font-black text-[#866452] md:grid-cols-[150px_1fr]"
              >
                <p>{label}</p>
                <a className="break-all underline" href={href}>
                  {href.replace("mailto:", "")}
                </a>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={asset("contact.png")}
          alt=""
          width={260}
          height={320}
          className="hidden h-auto w-[240px] self-end object-contain md:block"
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-8 pb-10 pt-3">
      <div className="flex items-center justify-between border-t-[3px] border-white pt-5 text-white">
        <Logo compact />
        <nav className="flex gap-4 font-display text-xs font-black">
          {["Top", ...navItems].map((item) => (
            <a key={item} href={item === "Top" ? "#" : `#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <p className="font-display text-xs font-black">© 2026 ASAHI KUROSU</p>
      </div>
    </footer>
  );
}

export function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] text-[#603d23]">
      <div className="mx-auto min-h-screen w-full max-w-[1200px] overflow-hidden bg-[#f1b1c0]">
        <Header />
        <HeroSection />
        <AboutSection />
        <FeatureCardsSection />
        <WorksSection />
        <SkillsSection />
        <CareerSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
