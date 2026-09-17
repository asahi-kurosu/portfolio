import Image from "next/image";

const navItems = ["About", "Works", "Skills", "Career", "Contact"];

const strengths = [
  {
    icon: "ai",
    label: "AIと開発",
    color: "bg-[#bbe2f6]",
    textColor: "text-[#4c8ec5]",
    width: "w-[118px]",
  },
  {
    icon: "visual",
    label: "視覚デザイン",
    color: "bg-[#fff9a6]",
    textColor: "text-[#603d23]",
    width: "w-[143px]",
  },
  {
    icon: "frontend",
    label: "フロントエンド",
    color: "bg-[#cb8adb]",
    textColor: "text-[#603d23]",
    width: "w-[135px]",
  },
  {
    icon: "uiux",
    label: "UI/UX 改善",
    color: "bg-[#a68adb]",
    textColor: "text-[#603d23]",
    width: "w-[107px]",
  },
  {
    icon: "illustration",
    label: "イラスト",
    color: "bg-[#ffc97e]",
    textColor: "text-[#603d23]",
    width: "w-[93px]",
  },
  {
    icon: "world",
    label: "世界観づくり",
    color: "bg-[#7ec1ff]",
    textColor: "text-[#603d23]",
    width: "w-[131px]",
  },
];

const features = [
  {
    title: "数字で語れる成果",
    copy: (
      <>
        新卒で配属されたセールスチームで、
        <br />
        テレアポ獲得率を改善。
      </>
    ),
    badge: "19.8% → 40.7%",
  },
  {
    title: "AI ネイティブな開発スタイル",
    copy: (
      <>
        Codex / Claude Code を活用し、
        <br />
        高速で開発＆改善。
      </>
    ),
    tags: ["Next.js", "TypeScript", "Prisma", "Vercel Blob", "Playwright", "..."],
  },
  {
    title: "デザイン感覚",
    copy: (
      <>
        イラスト制作で培った
        <br />
        視覚デザイン感覚で、
        <br />
        UI の「伝わりやすさ」を
        <br />
        意識した開発が得意です。
      </>
    ),
    image: "feature-girl-figma.png",
    tape: "right",
  },
];

const works = [
  {
    title: "MyKitchen - レシピ管理 Web アプリ",
    body: (
      <>
        <span className="sm:whitespace-nowrap">
          Next.js + TypeScript + Prisma で作る
        </span>
        <br />
        <span className="sm:whitespace-nowrap">
          個人利用向けレシピ管理 Web アプリ。
        </span>
        <br />
        <span className="sm:whitespace-nowrap">
          買い物リスト・画像アップロード・E2E テストまで実装。
        </span>
        <br />
      </>
    ),
    image: "work-2.png",
    tags: ["Next.js", "TypeScript", "Prisma", "Vercel Blob", "Playwright"],
    variant: "blue",
    viewMoreColor: "bg-[#2e6ea6] text-white",
    detailHref: "/works/mykitchen",
    links: [
      ["🌐 Live", "https://app-my-recipe.vercel.app/"],
      ["📦 Repo", "https://github.com/ohiromeya-web-hands-on/app_my-recipe"],
    ],
  },
  {
    title: "もぐもぐパン HP - WordPress 練習用 HP",
    body: (
      <>
        パン屋さんを題材に、
        <br />
        Web 制作でよく使う要素を全部入れた
        <br />
        WordPress 練習用サイト。題材選定から自分で実施。
      </>
    ),
    image: "work-1.png",
    tags: ["WordPress", "Vite", "Docker", "GitHub Actions"],
    variant: "cream",
    viewMoreColor: "bg-[#603d23] text-[#fff067]",
    detailHref: "/works/mogumogu",
    links: [],
  },
];

const skillGroups = [
  {
    title: "Fronted",
    badgeColor: "bg-[#eda4b7]",
    items: ["React", "Next.js", "TypeScript", "HTML / CSS", "WordPress"],
  },
  {
    title: "Backend / DB",
    badgeColor: "bg-[#4c8ec5]",
    items: ["Prisma", "PostgreSQL", "Auth.js"],
  },
  {
    title: "Test / QA",
    badgeColor: "bg-[#ffd23b]",
    items: ["Vitest", "Playwright", "axe"],
  },
  {
    title: "Infra",
    badgeColor: "bg-[#a68adb]",
    items: ["Vercel", "GitHub Actions", "Docker"],
  },
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

function StrengthIcon({ name }: { name: string }) {
  const source =
    name === "visual" || name === "illustration"
      ? "strength-visual-sheet.png"
      : `strength-${name}-sheet.png`;

  return (
    <span className={`strength-icon strength-icon-${name}`} aria-hidden="true">
      <Image src={asset(source)} alt="" width={2048} height={2048} unoptimized />
    </span>
  );
}

function OrganicShapeDefs() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute size-0"
      focusable="false"
    >
      <defs>
        <clipPath id="speech-blob" clipPathUnits="objectBoundingBox">
          <path d="M.08,.18 C.14,.08 .23,.13 .32,.08 S.49,.04 .58,.08 S.78,.03 .88,.07 C.96,.1 .97,.19 .95,.27 C.93,.35 .98,.43 .96,.52 C.94,.61 .98,.68 .92,.74 C.85,.81 .75,.78 .66,.82 S.47,.84 .38,.86 S.19,.88 .11,.81 C.04,.75 .06,.66 .03,.59 C0,.51 .04,.44 .02,.36 C0,.29 .04,.23 .08,.18 Z" />
        </clipPath>
        <clipPath id="about-blob" clipPathUnits="objectBoundingBox">
          <path d="M.09,.09 C.16,.02 .26,.07 .36,.05 S.55,.07 .65,.05 S.84,.04 .92,.1 C.98,.16 .97,.27 .98,.37 S.99,.57 .95,.67 C.91,.77 .81,.81 .73,.87 S.54,.91 .44,.94 S.24,.95 .14,.9 C.05,.85 .04,.74 .03,.64 S.02,.44 .04,.34 S.03,.16 .09,.09 Z" />
        </clipPath>
        <clipPath id="skill-blob" clipPathUnits="objectBoundingBox">
          <path d="M.09,.08 C.19,.03 .3,.06 .4,.05 S.61,.07 .72,.04 S.91,.05 .96,.15 C.99,.25 .96,.36 .97,.47 S.99,.69 .96,.8 C.93,.91 .82,.95 .71,.95 S.5,.96 .39,.95 S.18,.97 .1,.9 C.03,.83 .05,.72 .03,.61 S.04,.39 .03,.28 S.03,.13 .09,.08 Z" />
        </clipPath>
        <clipPath id="feature-blob-a" clipPathUnits="objectBoundingBox">
          <path d="M.08,.08 C.17,.03 .27,.07 .37,.04 S.58,.07 .69,.04 S.9,.03 .96,.13 C.99,.23 .97,.35 .98,.46 S.97,.68 .98,.79 C.97,.9 .87,.95 .76,.95 S.55,.97 .44,.96 S.22,.98 .12,.92 C.04,.86 .04,.75 .03,.64 S.03,.42 .04,.31 S.02,.14 .08,.08 Z" />
        </clipPath>
        <clipPath id="feature-blob-b" clipPathUnits="objectBoundingBox">
          <path d="M.07,.1 C.15,.03 .26,.07 .36,.04 S.57,.07 .68,.04 S.89,.03 .96,.12 C.99,.22 .97,.34 .98,.45 S.97,.67 .98,.78 C.98,.89 .88,.95 .77,.95 S.56,.98 .45,.96 S.23,.98 .13,.93 C.04,.87 .04,.76 .03,.65 S.03,.43 .04,.32 S.02,.16 .07,.1 Z" />
        </clipPath>
        <clipPath id="feature-blob-c" clipPathUnits="objectBoundingBox">
          <path d="M.09,.08 C.18,.03 .28,.07 .38,.04 S.59,.07 .7,.04 S.91,.04 .96,.14 C.99,.24 .97,.36 .98,.47 S.97,.69 .98,.8 C.96,.91 .86,.95 .75,.95 S.54,.98 .43,.96 S.21,.97 .11,.91 C.04,.84 .04,.73 .03,.62 S.03,.4 .04,.29 S.03,.13 .09,.08 Z" />
        </clipPath>
        <clipPath id="wide-blob" clipPathUnits="objectBoundingBox">
          <path d="M.06,.09 C.14,.03 .23,.07 .33,.04 S.52,.07 .62,.04 S.82,.03 .91,.07 C.98,.12 .97,.23 .98,.34 S.97,.55 .98,.66 C.98,.78 .94,.87 .85,.92 C.76,.97 .66,.94 .56,.97 S.36,.96 .26,.97 C.15,.97 .06,.92 .04,.82 S.03,.61 .03,.5 S.02,.29 .04,.19 C.04,.14 .05,.11 .06,.09 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function SectionTitle({
  children,
  color = "text-[#db8a9d]",
  underlineColor = "bg-[#866452]",
}: {
  children: React.ReactNode;
  color?: string;
  underlineColor?: string;
}) {
  return (
    <div className="mb-5">
      <h2 className={`font-display text-[30px] font-black leading-none sm:text-[34px] ${color}`}>
        {children}
      </h2>
      <div className={`mt-3 h-[5px] w-[86px] rounded-full ${underlineColor}`} />
    </div>
  );
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <Image
        src={asset("logo.png")}
        alt=""
        width={compact ? 82 : 132}
        height={compact ? 44 : 70}
        className={
          compact
            ? "h-auto w-[74px]"
            : "h-auto w-[92px] sm:w-[132px]"
        }
        priority={!compact}
      />
      {!compact && (
        <p className="font-display text-[17px] font-black leading-[1.05] text-[#4c8ec5] sm:text-[22px]">
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
    <header className="h-[118px] w-full bg-[#bbe2f6] sm:h-[90px]">
      <div className="mx-auto flex h-[76px] w-full max-w-[1024px] items-center justify-between px-4 sm:h-full sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 font-display text-[19px] font-black text-[#4c8ec5] md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </div>
      <nav className="mobile-nav mx-4 grid grid-cols-5 border-t border-white/60 pt-3 text-center font-display text-[12px] font-black text-[#4c8ec5] sm:hidden">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[530px] overflow-hidden px-4 pt-4 sm:min-h-[650px] sm:px-8 sm:pt-8">
      <div className="absolute left-[14px] top-[44px] z-20 h-[116px] w-[calc(100%-28px)] rotate-[-2.5deg] sm:left-[46px] sm:top-[48px] sm:h-[168px] sm:w-[610px] sm:rotate-[-4.18deg]">
        <Image
          src={asset("hero-speech-figma.svg")}
          alt=""
          fill
          sizes="(max-width: 639px) 100vw, 610px"
          className="object-fill"
        />
        <Image
          src={asset("hero-speech-tail-figma.svg")}
          alt=""
          width={51}
          height={84}
          className="absolute bottom-[-21px] right-[15px] h-[76px] w-[38px] rotate-[177deg] sm:bottom-[-21px] sm:right-[27px] sm:h-[60px] sm:w-[36px] sm:rotate-[123deg]"
        />
        <div className="absolute inset-0 z-[1] flex items-center justify-center px-5 pb-1 sm:px-10">
          <h1 className="w-fit text-left font-display font-black leading-[1.2] text-[#db8a9d]">
            <span className="marker-line inline-block whitespace-nowrap text-[17px] min-[400px]:text-[18px] sm:text-[34px]">
              デザイン感覚
              <span className="text-[15px] sm:text-[28px]"> × </span>
              AI ネイティブ
              <span className="text-[15px] sm:text-[28px]">で、</span>
            </span>
            <span className="block whitespace-nowrap text-[17px] min-[400px]:text-[18px] sm:text-[34px]">
              現代的
              <span className="text-[15px] sm:text-[28px]">な</span>
              フロント開発
              <span className="text-[15px] sm:text-[28px]">に</span>
              挑む
            </span>
          </h1>
        </div>
      </div>

      <div className="absolute left-[27px] top-[159px] z-30 flex h-[70px] w-[315px] rotate-[-3deg] items-center px-5 text-white sm:left-[70px] sm:top-[188px] sm:h-[92px] sm:w-[448px] sm:rotate-[-4.48deg] sm:px-[30px]">
        <Image
          src={asset("hero-blue-label-figma.svg")}
          alt=""
          fill
          sizes="(max-width: 639px) 315px, 448px"
          className="object-fill"
        />
        <p className="relative z-[1] mx-auto w-fit text-left font-display text-[15px] font-black leading-[1.25] min-[400px]:text-[16px] sm:text-[23px]">
          <span className="whitespace-nowrap">
            フロントエンドエンジニア志望！
          </span>
          <br />
          <span className="whitespace-nowrap">黒須朝陽（くろす あさひ）</span>
        </p>
      </div>

      <div className="absolute bottom-[-2px] right-0 z-10 h-[290px] w-full sm:bottom-0 sm:right-[20px] sm:h-[630px] sm:w-[910px]">
        <Image
          src={asset("hero-cropped.png")}
          alt="スケートボードに乗る人物と犬のイラスト"
          fill
          sizes="(max-width: 639px) 100vw, 910px"
          className="object-contain object-center"
          priority
        />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative px-4 pb-9 sm:px-8">
      <div className="grid gap-8 md:grid-cols-[1.95fr_1.05fr] md:gap-6">
        <div className="relative">
          <div className="relative min-h-[500px] px-7 py-8 sm:min-h-[350px] sm:px-12 sm:py-6">
            <Image
              src={asset("about-card-figma.svg")}
              alt=""
              fill
              sizes="650px"
              className="object-fill"
            />
            <div className="relative z-[1] grid min-h-[420px] content-center items-start gap-2 sm:min-h-[302px] sm:grid-cols-[170px_1fr] sm:gap-5">
              <div className="flex flex-col items-start">
                <div className="ml-2 sm:ml-4">
                  <SectionTitle underlineColor="bg-[#db8a9d]">About</SectionTitle>
                </div>
                <Image
                  src={asset("logo.png")}
                  alt=""
                  width={220}
                  height={120}
                  className="absolute right-1 top-[-12px] h-auto w-[120px] object-contain sm:static sm:-mt-[66px] sm:w-[175px]"
                />
              </div>
              <p className="pt-0.5 text-[12px] font-black leading-[1.7] text-[#603d23] sm:whitespace-nowrap sm:text-[13px] sm:leading-[1.55]">
                AIマーケティング会社の inglow に新卒入社し、
                <br />
                セールスチームやYouTube グロースチームを経て、
                <br />
                現在は Codex / Claude Code を主軸にした
                <br />
                AI ネイティブなスタイルで
                <br />
                Next.js + TypeScript の Web アプリを継続開発しています。
                <br />
                高校時代には父に教わって始めた中国語で、
                <br />
                スピーチコンテストの世界大会（漢語橋）に
                <br />
                日本代表として出場した経験もあります。
                <br />
                イラストで培った視覚感覚を
                <br />
                AI 出力のレビューに活かしながら、
                <br />
                現代的なフロント開発に挑んでいきます。
              </p>
            </div>
          </div>
          <Image
            src={asset("paperclip-figma.png")}
            alt=""
            width={432}
            height={398}
            className="absolute left-[42px] top-0 z-[2] h-auto w-[44px] rotate-[277deg] sm:left-[72px] sm:w-[51px]"
          />
        </div>

        <div className="relative mt-4 self-start">
          <div className="relative min-h-[290px] px-5 pb-8 pt-[82px] sm:px-6">
            <Image
              src={asset("strength-card-figma.svg")}
              alt=""
              fill
              sizes="330px"
              className="object-fill"
            />
            <div className="relative z-[1] mx-auto flex w-fit flex-col items-start gap-4">
              {[strengths.slice(0, 2), strengths.slice(2, 4), strengths.slice(4, 6)].map(
                (row) => (
                  <div
                    key={row.map((item) => item.label).join("-")}
                    className="flex items-center justify-start gap-[8px]"
                  >
                    {row.map((item) => (
                      <span
                        key={item.label}
                        className={`${item.color} ${item.textColor} ${item.width} inline-flex min-h-[42px] items-center justify-center gap-1 whitespace-nowrap rounded-full px-4 text-[13px] font-black`}
                      >
                        <StrengthIcon name={item.icon} />
                        {item.label}
                      </span>
                    ))}
                  </div>
                ),
              )}
            </div>
          </div>
          <span className="absolute right-[8px] top-[-10px] z-[2] h-[48px] w-[90px] rotate-[25deg] overflow-hidden">
            <Image
              src={asset("tape-pink-figma.png")}
              alt=""
              width={864}
              height={260}
              className="absolute left-[-10%] top-[12px] h-full w-[122%] max-w-none"
            />
          </span>
          <h3 className="absolute left-[34px] top-[-12px] z-[3] flex w-fit rounded-full bg-[#db8a9d] px-7 py-3 font-display text-[22px] font-black text-white">
            得意なこと
          </h3>
        </div>
      </div>
    </section>
  );
}

function FeatureCardsSection() {
  return (
    <section className="relative px-4 pb-16 pt-5 sm:px-0">
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className={`relative mx-auto h-[305px] w-full max-w-[360px] px-8 pt-[66px] md:max-w-none ${
              index === 1 ? "md:translate-y-[-4px]" : ""
            }`}
          >
            <Image
              src={asset("feature-card-figma-crop.png")}
              alt=""
              fill
              sizes="315px"
              className="z-0 object-fill"
            />
            {feature.tape && (
              <span className="absolute left-[52px] top-[10px] z-[2] h-[31px] w-[88px] rotate-[8deg] overflow-hidden">
                <Image
                  src={asset("pet-1.png")}
                  alt=""
                  width={864}
                  height={260}
                  className="absolute left-[-10.42%] top-0 h-full w-[121.69%] max-w-none"
                />
              </span>
            )}
            {index === 0 && (
              <Image
                src={asset("feature-chart-figma.png")}
                alt=""
                width={120}
                height={120}
                className="absolute right-8 top-[16px] z-[1] w-[92px] rotate-[10deg]"
              />
            )}
            <div className="relative z-[1]">
              <h3 className="mb-3 whitespace-nowrap font-display text-[19px] font-black leading-tight text-[#603d23]">
                {feature.title}
              </h3>
              <p
                className={`mb-5 font-black leading-[1.42] text-[#4c8ec5] ${
                  index === 2
                    ? "max-w-[255px] text-[13px]"
                    : "max-w-[270px] text-[14px]"
                }`}
              >
                {feature.copy}
              </p>
              {feature.badge && (
                <div className="inline-flex items-baseline rounded-[22px] border-[4px] border-[#f1b1c0] px-6 py-2 font-display font-black">
                  <span className="text-[23px] text-[#f1b1c0]">19.8%</span>
                  <span className="px-2 text-[17px] text-[#603d23]">→</span>
                  <span className="text-[26px] text-[#db8a9d]">40.7%</span>
                </div>
              )}
              {feature.tags && (
                <div className="flex max-w-[258px] flex-wrap gap-x-2 gap-y-2">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className={
                        tag === "..."
                          ? "inline-flex h-[28px] items-center justify-center px-1 text-[11px] font-black text-[#4c8ec5]"
                          : "inline-flex h-[28px] items-center justify-center rounded-full bg-[#bbe2f6] px-3 text-[11px] font-black text-[#4c8ec5]"
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {feature.image && (
              <Image
                src={asset(feature.image)}
                alt=""
                width={223}
                height={279}
                className="absolute bottom-[-12px] right-[-6px] z-[2] w-[126px] -scale-x-100 object-contain"
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function WorksSection() {
  return (
    <section id="works" className="relative isolate px-4 pb-16 pt-12 sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-70px] bottom-0 top-[-22px] z-0"
      >
        <Image
          src={asset("works-bg-figma-latest.png")}
          alt=""
          fill
          sizes="1024px"
          className="object-cover"
        />
      </div>
      <div className="relative z-[1]">
        <SectionTitle color="text-[#4c8ec5]" underlineColor="bg-[#4c8ec5]">
          Works
        </SectionTitle>
      </div>
      <div className="relative z-[1] grid items-start gap-5 md:grid-cols-2">
        {works.map((work, index) => (
          <article
            key={work.title}
            className={`relative min-h-[520px] rounded-[30px] border-[5px] border-white p-3 pb-14 sm:h-[520px] sm:pb-12 ${
              work.variant === "cream" ? "bg-[#fff4d5]" : "bg-[#bbe2f6]"
            } ${index === 0 ? "rotate-[-1deg] sm:rotate-[-2.4deg]" : "rotate-[1deg] sm:rotate-[3.6deg]"}`}
          >
            <span
              className={`absolute z-[2] h-[24px] w-[60px] overflow-hidden sm:h-[46px] sm:w-[118px] ${
                index === 0
                  ? "left-[-24px] top-[-16px] rotate-[-18deg] sm:left-[-48px] sm:top-[-31px]"
                  : "left-[-6px] top-[-9px] rotate-[-18deg] sm:left-[-12px] sm:top-[-18px]"
              }`}
            >
              <Image
                src={asset(index === 0 ? "pet-1.png" : "tape-pink-figma.png")}
                alt=""
                width={864}
                height={260}
                className="absolute left-[-15%] top-[-10%] h-[120%] w-[130%] max-w-none sm:left-[-10%] sm:top-0 sm:h-full sm:w-[122%]"
              />
            </span>
            <div className="relative h-[220px] w-full overflow-hidden rounded-[22px] border-[4px] border-white sm:h-[282px]">
              <Image
                src={asset(work.image)}
                alt=""
                fill
                sizes="480px"
                className="scale-[1.18] object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <h3
              className={`mt-4 font-display font-black leading-tight ${
                index === 0 ? "text-[22px]" : "text-[20px]"
              } ${work.variant === "blue" ? "text-[#2e6ea6]" : "text-[#603d23]"}`}
            >
              {work.title}
            </h3>
            <p
              className={`mt-2 min-h-[76px] font-black leading-[1.45] ${
                work.variant === "cream"
                  ? "text-[15px] text-[#603d23]"
                  : "text-[15px] text-[#4c8ec5]"
              }`}
            >
              {work.body}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:flex-nowrap">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className={`whitespace-nowrap rounded-full px-2.5 py-1.5 text-[11px] font-black ${
                    work.variant === "cream"
                      ? "bg-[#fff067] text-[#603d23]"
                      : "bg-white text-[#4c8ec5]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="absolute bottom-5 left-5 flex gap-2 text-[12px] font-black text-[#2e6ea6]">
              {work.links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="relative z-20 border-b border-dotted border-current"
                >
                  {label}
                </a>
              ))}
            </div>
            <a
              href={work.detailHref}
              className={`absolute rounded-[10px] px-5 py-2 font-display text-[18px] font-black ${
                index === 0
                  ? "bottom-[-13px] right-[28px] rotate-[-6deg] sm:right-[76px] sm:rotate-[-10deg]"
                  : "bottom-[-17px] right-[28px] rotate-[7deg] sm:right-[268px] sm:rotate-[12deg]"
              } ${work.viewMoreColor}`}
            >
              view more→
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="relative px-4 pb-12 pt-8 sm:px-8">
      <div className="relative isolate min-h-[820px] overflow-visible px-5 pb-24 pt-16 sm:px-12 sm:pb-16 sm:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-[-130px] top-0 -z-10 w-[calc(100%+260px)] sm:inset-0 sm:h-full sm:w-full"
        >
          <Image
            src={asset("skills-bg-figma.svg")}
            alt=""
            fill
            sizes="1024px"
            className="object-fill"
          />
        </div>
        <span className="absolute left-[-26px] top-[-28px] z-[2] h-[40px] w-[112px] rotate-[-15deg] overflow-hidden sm:left-[54px]">
          <Image
            src={asset("tape-pink-figma.png")}
            alt=""
            width={864}
            height={260}
            className="absolute left-[-10%] top-0 h-full w-[122%] max-w-none"
          />
        </span>
        <Image
          src={asset("skills-img-4122-2.png")}
          alt=""
          width={433}
          height={569}
          className="absolute right-[-12px] top-[15px] z-[3] w-[150px] object-contain sm:right-[20px] sm:top-[-78px] sm:w-[180px]"
        />

        <SectionTitle underlineColor="bg-[#db8a9d]">Skills</SectionTitle>
        <p className="mb-6 max-w-[180px] text-[12px] font-black leading-relaxed text-[#603d23] min-[430px]:max-w-[220px] sm:mb-8 sm:max-w-none sm:text-[16px]">
          ※ 学習プログラム配下のプロジェクト（MyKitchen / もぐもぐパン HP）で使用した技術スタックです。
        </p>

        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="min-h-[190px] rounded-[24px] border-[3px] border-[#d4d4d4] bg-white px-3 py-4 sm:min-h-[205px] sm:rounded-[30px] sm:px-5 sm:py-5"
            >
              <h3
                className={`${group.badgeColor} mb-4 inline-flex min-w-[104px] justify-center rounded-full px-3 py-2 font-display text-[14px] font-black text-white sm:min-w-[112px] sm:px-5 sm:text-[18px]`}
              >
                {group.title}
              </h3>
              <ul className="space-y-3 text-[13px] font-black leading-tight text-[#603d23] sm:text-[16px]">
                {group.items.map((item) => (
                  <li key={item}>・{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="rounded-[28px] border-[3px] border-[#db8a9d] bg-[#f9edf1] px-4 py-6 sm:px-7 sm:py-7">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-5 font-display text-[24px] font-black text-[#db8a9d]">
                ★ AI ツール活用
              </h3>
              <h4 className="mb-4 text-[18px] font-black text-[#db8a9d]">
                ◆ 実プロジェクトで使用経験
              </h4>
              <div className="space-y-3 text-[14px] font-black leading-relaxed text-[#603d23]">
                <p>
                  ・Codex — 現在の中核プロジェクト MyKitchen で主軸とし
                  <br />
                  て使用
                </p>
                <p>・Claude Code — 過去プロジェクトで使用経験あり</p>
                <p>→ どちらのツールを使う現場でも対応可能</p>
              </div>
              <div className="mt-5 inline-flex rounded-[14px] border-[2px] border-[#db8a9d] bg-white px-4 py-3 text-[11px] font-black leading-snug text-[#603d23] sm:px-5 sm:text-[12px]">
                補助で使うもの: ChatGPT / 公式ドキュメント / メンターへの質問 /
                <br />
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-[18px] font-black text-[#db8a9d]">
                ◆ 私のワークフロー
              </h4>
              <ol className="mb-8 space-y-3 text-[14px] font-black leading-tight text-[#603d23]">
                {[
                  "人（自分）が「目的」を投げる",
                  "AI が「実装・調査・修正」を返す",
                  "人（自分）が「確認して方向修正」する",
                ].map((item, index) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="inline-flex size-6 items-center justify-center rounded-full bg-[#db8a9d] text-white">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>

              <h4 className="mb-4 text-[18px] font-black text-[#db8a9d]">
                ◆ AI 出力のレビュー観点
              </h4>
              <p className="mb-4 text-[14px] font-black leading-relaxed text-[#603d23]">
                「動いたけど怪しい」で気づく違和感センサー
                <br />
                （イラスト経験で培った UI/UX 感覚を活用）
              </p>
              <div className="relative inline-flex rounded-[14px] border-[2px] border-[#db8a9d] bg-white px-4 py-4 text-[11px] font-black leading-snug text-[#603d23] sm:px-6 sm:text-[12px]">
                例: Splide の余白がおかしい / スマホだけ崩れる /
                <br />
                ハンバーガーの×がズレる / header 幅がおかしい /
                <br />
                アライメントが微妙にズレている等。
                <span className="absolute bottom-[85px] right-[-17px] h-[20px] w-[47px] rotate-[35deg] overflow-hidden">
                  <Image
                    src={asset("pet-1.png")}
                    alt=""
                    width={864}
                    height={260}
                    className="absolute left-[-10%] top-0 h-full w-[122%] max-w-none"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CareerSection() {
  return (
    <section id="career" className="relative isolate px-4 pb-16 pt-16 sm:px-8">
      <svg
        aria-hidden="true"
        className="absolute inset-x-[-90px] bottom-[-50px] top-0 -z-10 h-[calc(100%+50px)] w-[calc(100%+180px)] sm:inset-x-[-34px] sm:bottom-[-6px] sm:top-0 sm:h-full sm:w-[calc(100%+68px)]"
        preserveAspectRatio="none"
        viewBox="0 0 1024 760"
      >
        <path
          d="M76 34C214-10 358 52 500 20C635-10 793 8 906 76C996 130 994 260 972 386C950 513 995 644 891 698C775 758 632 702 504 715C362 729 227 786 121 706C21 630 51 493 50 365C50 234-27 99 76 34Z"
          fill="#BBE2F6"
        />
      </svg>

      <div className="relative z-[1] px-0 sm:px-6">
        <SectionTitle color="text-[#4c8ec5]" underlineColor="bg-[#4c8ec5]">
          Career
        </SectionTitle>

        <div className="mb-7 space-y-1 text-[13px] font-black leading-relaxed text-[#866452] sm:text-[16px]">
          <p className="text-[#4c8ec5]">株式会社 inglow</p>
          <p>2023年4月 〜 2024年3月（新卒で計１年）</p>
          <p>2023/4 セールスチーム配属 → 2023/10 YouTube グロースチーム異動</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-[20px] border-[3px] border-[#d4d4d4] bg-white px-6 py-4">
            <h3 className="mb-3 text-center text-[17px] font-black text-[#4c8ec5]">
              個人アポイント獲得率
            </h3>
            <div className="flex items-center justify-center gap-5">
              <CareerMetricBox label="Q1" value="19.8%" caption="社内1位" />
              <span className="text-[20px] font-black text-[#4c8ec5]">→</span>
              <CareerMetricBox label="Q2" value="40.7%" caption="社内1位" />
            </div>
          </article>

          <article className="rounded-[20px] border-[3px] border-[#d4d4d4] bg-white px-6 py-4">
            <h3 className="mb-3 text-center text-[17px] font-black text-[#4c8ec5]">
              チーム平均アポイント獲得率
            </h3>
            <div className="flex items-center justify-center gap-5">
              <CareerMetricBox label="Q1" value="17.3%" />
              <span className="text-[20px] font-black text-[#4c8ec5]">→</span>
              <CareerMetricBox label="Q2" value="32.3%" caption="過去最大" />
            </div>
          </article>

          <article className="rounded-[20px] border-[3px] border-[#d4d4d4] bg-white px-5 py-4">
            <h3 className="mb-3 text-[18px] font-black text-[#4c8ec5]">
              取り組み（セールスチーム期）
            </h3>
            <CareerList
              items={[
                "個人で勝ったあと、チーム全体に伸び代を見出す",
                "テレアポマニュアルを整備",
                "先輩を含めた OJT を実施",
                "受注率も２四半期連続でチーム内２位",
              ]}
            />
          </article>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-[1fr_2.15fr]">
          <article className="rounded-[20px] border-[3px] border-[#d4d4d4] bg-white px-6 py-5">
            <h3 className="mb-4 text-center text-[17px] font-black text-[#4c8ec5]">
              チャンネル平均再生率
            </h3>
            <div className="flex items-center justify-center gap-5">
              <CareerMetricBox label="Before" value="24%" />
              <span className="text-[20px] font-black text-[#4c8ec5]">→</span>
              <CareerMetricBox label="After" value="42%" caption="×1.75" />
            </div>
          </article>

          <article className="relative rounded-[20px] border-[3px] border-[#d4d4d4] bg-white px-6 py-5">
            <span className="absolute right-[-28px] top-[-24px] z-[2] h-[44px] w-[110px] rotate-[25deg] overflow-hidden">
              <Image
                src={asset("tape-pink-figma.png")}
                alt=""
                width={864}
                height={260}
                className="absolute left-[-10%] top-0 h-full w-[122%] max-w-none"
              />
            </span>
            <h3 className="mb-3 text-[18px] font-black text-[#4c8ec5]">
              取り組み（YouTube グロースチーム期）
            </h3>
            <CareerList
              items={[
                "チャンネル分析・再設計・市場調査を実施",
                "企画の選び方・構成・サムネイルを一新",
              ]}
            />
            <p className="mt-3 text-[12px] font-black leading-relaxed text-[#603d23]">
              → セールス期も YT グロース期も、
              <br />
              「現状の数字を分析 → 構造から見直す → 約 1.7〜1.9 倍に改善」
              <br />
              という同じ行動原理で動いていることが、この２期間の並列表示で伝わります。
            </p>
          </article>
        </div>

        <article className="relative mt-5 rounded-[20px] border-[3px] border-[#d4d4d4] bg-white px-8 py-5">
          <h3 className="mb-3 text-[18px] font-black text-[#4c8ec5]">
            自発的取り組み
          </h3>
          <p className="max-w-[690px] text-[12px] font-black leading-relaxed text-[#603d23]">
            新入社員のオンボーディング支援を、業務外で自発的に実施。
            <br />
            「自分も新卒の初めの方で同じように助けてもらったから、
            自分もそう動こうと思った」のがきっかけです。
          </p>
          <Image
            src={asset("career-img-4124-2.png")}
            alt=""
            width={427}
            height={534}
            className="absolute bottom-[-54px] right-[120px] hidden w-[230px] object-contain md:block"
          />
        </article>
      </div>
    </section>
  );
}

function CareerMetricBox({
  label,
  value,
  caption,
}: {
  label: string;
  value: string;
  caption?: string;
}) {
  return (
    <div className="flex h-[88px] w-[78px] flex-col items-center justify-center rounded-[10px] bg-[#d4d4d4]/70">
      <p className="text-[11px] font-black text-[#866452]">{label}</p>
      <p className="font-display text-[24px] font-black leading-tight text-[#db8a9d]">
        {value}
      </p>
      {caption && (
        <p className="mt-1 rounded-[3px] bg-[#db8a9d] px-2 py-0.5 text-[10px] font-black text-white">
          {caption}
        </p>
      )}
    </div>
  );
}

function CareerList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2 text-[11px] font-black leading-tight text-[#603d23]">
      {items.map((item, index) => (
        <li key={item} className="flex gap-2">
          <span className="mt-[-1px] inline-flex size-[16px] flex-none items-center justify-center rounded-full bg-[#4c8ec5] text-[10px] text-white">
            {index + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-4 py-10 sm:px-8">
      <div
        className="relative -mx-4 grid gap-6 px-10 py-16 sm:mx-0 sm:px-10 sm:py-9 md:grid-cols-[1fr_260px]"
        style={{
          backgroundImage:
            'url("https://portfolio-l2cs3s6so-kurosuasahi-1792s-projects.vercel.app/portfolio-assets/contact-bg-figma.png")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
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
    <footer className="px-4 pb-10 pt-3 sm:px-8">
      <div className="flex flex-col items-center gap-5 border-t-[3px] border-white pt-5 text-white sm:flex-row sm:justify-between sm:gap-0">
        <Logo compact />
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-display text-xs font-black">
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
    <main id="legacy-home" className="min-h-screen w-full overflow-x-clip bg-[#f1b1c0] text-[#603d23]">
      <OrganicShapeDefs />
      <Header />
      <div className="mx-auto min-h-screen w-full max-w-[1024px] overflow-hidden">
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
