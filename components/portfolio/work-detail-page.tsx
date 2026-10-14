import Image from "next/image";
import Link from "next/link";

export type WorkSlug = "mykitchen" | "mogumogu";
const asset = (path: string) => `/portfolio-assets/${path}`;
const figma = (slug: WorkSlug, name: string) => asset(`work-detail/${slug}/${name}.png`);

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[25px] font-black leading-tight text-[#db8a9d] lg:text-[40px]">{children}</h2>;
}
function Panel({ children, blue = false, yellow = false, className = "" }: { children: React.ReactNode; blue?: boolean; yellow?: boolean; className?: string }) {
  const background = yellow ? "bg-[#fff8bc]" : blue ? "bg-[#dff2fc]" : "bg-white";
  return <div className={`rounded-[28px] border-[3px] border-[#f1b1c0] p-5 lg:rounded-[44px] lg:p-8 ${background} ${className}`}>{children}</div>;
}
function Header() {
  const navItems = ["About", "Works", "Skills", "Career", "Contact"];

  return (
    <header className="h-[118px] w-full bg-[#bbe2f6] sm:h-[90px]">
      <div className="mx-auto flex h-[76px] w-full max-w-[1200px] items-center justify-between px-4 sm:h-full sm:px-8">
        <Link href="/" aria-label="トップへ戻る" className="flex items-center gap-2 sm:gap-4">
          <Image
            src={asset("logo.png")}
            alt=""
            width={132}
            height={70}
            className="h-auto w-[92px] sm:w-[132px]"
            priority
          />
          <span className="text-[17px] font-black leading-[1.05] text-[#4c8ec5] sm:text-[22px]">
            ASAHI
            <br />
            KUROSU
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-[19px] font-black text-[#4c8ec5] md:flex">
          {navItems.map((item) => (
            <Link key={item} href={`/#${item.toLowerCase()}`}>
              {item}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="mx-4 grid grid-cols-5 border-t border-white/60 pt-3 text-center text-[12px] font-black text-[#4c8ec5] sm:hidden">
        {navItems.map((item) => (
          <Link key={item} href={`/#${item.toLowerCase()}`}>
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
}

const myKitchenPrs = [
  [21, "買い物リストワークフロー", "DnD + Undo + 競合解消。「実装 → 自分で動作確認 → 不具合発見 → 修正」のサイクルが追える代表 PR。"],
  [23, "レシピ画像アップロード", "Vercel Blob 直送 + 画像 alt バリデーションテスト追加。フロント + バック + ストレージを横断する実装。"],
  [27, "MVP 品質", "メンテナンス JSON エクスポート + Playwright / axe による品質チェック追加。"],
] as const;

function MyKitchen() {
  return <>
    <div className="flex justify-between text-[13px] font-bold text-[#db8a9d]"><Link href="/">← トップへ戻る</Link><Link href="/works/mogumogu">次のWorkへ →</Link></div>
    <section className="mt-7"><h1 className="text-[30px] font-black leading-[1.35] lg:text-[54px]">MyKitchen —<br className="min-[430px]:hidden" /> レシピ管理 Web アプリ</h1><div className="relative mt-6 rounded-[30px] bg-[#c3e3ff] p-3 pb-5 lg:rounded-[50px] lg:p-6 lg:pb-8"><div aria-hidden="true" className="absolute -left-2 -top-3 z-10 h-[29px] w-[72px] rotate-[-36.6deg] overflow-hidden lg:-left-5 lg:-top-5 lg:h-[48px] lg:w-[120px]"><Image src={figma("mykitchen", "figma-tape")} alt="" fill sizes="120px" className="object-cover" /></div><Image src={figma("mykitchen", "figma-main")} alt="MyKitchenのホーム画面" width={2386} height={1542} priority className="aspect-[16/10] h-auto w-full rounded-[22px] object-cover object-left-top lg:rounded-[38px]" /></div></section>
    <div className="mt-6 grid gap-3"><a href="https://app-my-recipe.vercel.app/" aria-label="MyKitchenのLive Demoを見る" className="relative z-20 inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#db8a9d] font-black text-white">▶ Live Demo</a><a href="https://github.com/ohiromeya-web-hands-on/app_my-recipe" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border-2 border-[#db8a9d] bg-white font-black"><Image src={asset("work-detail/mykitchen/github.svg")} alt="" width={35} height={34} className="h-[22px] w-[23px]" />GitHub Repository</a></div>

    <section className="mt-12 space-y-5"><div className="grid gap-5"><Panel blue><Heading>概要</Heading><p className="mt-4 text-[14px] font-bold leading-[1.85]">個人利用向けのレシピ管理 Web アプリ。<br />レシピを登録・検索・閲覧し、選んだレシピから買い物リストを生成して買い物までを一気通貫でサポートします。<br />学習プログラム ohiromeya-web-hands-on の課題として、メンターのコードレビューを前提とした PR ワークフローで継続開発しています。</p></Panel><Panel><Heading>技術スタック</Heading><div className="mt-4 flex flex-wrap gap-2">{["Next.js 16","React 19","TypeScript","Prisma 7","PostgreSQL","Auth.js","Vercel Blob","react-hook-form","Vitest","Playwright","@axe-core/playwright","zod"].map(tag=><span key={tag} className="rounded-full bg-[#db8a9d] px-3 py-2 text-xs font-black text-white">{tag}</span>)}</div><Image src={figma("mykitchen","figma-tech")} alt="女の子と白い犬のイラスト" width={1080} height={1350} loading="eager" className="ml-auto mt-1 h-auto w-[158px]" /></Panel></div><Heading>担当範囲 （本人が何を判断・実装したか）</Heading><Panel><h3 className="font-black text-[#db8a9d]">① 仕様理解・実装方針の決定</h3><p className="mt-2 text-sm font-bold leading-7">各 Issue を読み、自分で実装案を立てて進める。「実装前にレビューを通す」運用も自分で整備（PR #28）。</p></Panel><Panel><h3 className="font-black text-[#db8a9d]">② 実装した主な機能</h3><ul className="mt-2 list-disc space-y-1 pl-5 text-sm font-bold leading-7"><li>レシピ CRUD / 検索フィルタ</li><li>画像アップロード（Vercel Blob 直送）</li><li>買い物リスト + ドラッグ&amp;ドロップ + Undo + 競合解消</li><li>食材ピッカー、コマンドパレット</li><li>認証フロー + オーナー権限ガード</li><li>JSON エクスポート + 日次メンテナンス cron</li><li>Blob 画像のガベージコレクション</li></ul></Panel><Panel><h3 className="font-black text-[#db8a9d]">③ UI/UX 違和感の検出</h3><p className="mt-2 text-sm font-bold leading-7">「動いたけど怪しい」で不具合を自ら発見・修正。例: shopping undo race / rollback、E2E owner bypass の堅牢化など。</p></Panel><Panel><h3 className="font-black text-[#db8a9d]">④ テスト</h3><p className="mt-2 text-sm font-bold leading-7">Playwright E2E、Vitest、a11y テストを自分で追加。</p></Panel><Panel><h3 className="font-black text-[#db8a9d]">⑤ レビュー対応</h3><p className="mt-2 text-sm font-bold leading-7">PR レビュー指摘を継続的に対応（コミット履歴に「fix review feedback」「Address xxx review」として明確に残っている）。</p></Panel><Panel yellow><h3 className="font-black text-[#db8a9d]">◆ 制作の文脈</h3><p className="mt-2 text-sm font-bold leading-7">学習プログラム配下のプロジェクトです。初期インフラ環境（Vercel、GitHub Actions、DB セットアップ）と、コードレビュー・設計レベルのアドバイスはメンターが担当しています。</p></Panel></section>
    <section className="relative mt-12 space-y-5"><Heading>制作ストーリー</Heading><div className="relative pt-14"><Panel><h3 className="font-black text-[#db8a9d]">◆ 一番難しかった</h3><p className="mt-3 text-sm font-bold leading-7">CI が落ちて、原因を突き止めるまでに時間がかかったこと。GitHub Actions でテスト・型チェック・ビルドが通らなくなる場面と継続的に格闘してきました。エラーログを読み解き、ローカルで再現し、修正する流れを繰り返しながら、CI のしくみそのものへの理解が深まりました。</p></Panel><Image src={figma("mykitchen","figma-story")} alt="犬に引かれてローラースケートをする女の子" width={1080} height={1350} loading="eager" className="pointer-events-none absolute right-[-11px] -top-[78px] z-20 h-auto w-[188px]" /></div><Panel><h3 className="font-black text-[#db8a9d]">◆ 一番面白かった</h3><p className="mt-3 text-sm font-bold leading-7">ボタンが増えるところとか、画面に反映されていく瞬間。コードを書いた結果がそのまま視覚にフィードバックされるのが、ずっとイラストを描いてきた自分には特に楽しい部分です。</p></Panel><Panel><h3 className="flex items-center gap-2 font-black text-[#db8a9d]"><Image src={figma("mykitchen","figma-robot-tight")} alt="ロボットのイラスト" width={260} height={240} loading="eager" className="h-[30px] w-8 shrink-0 object-contain" />AI 活用</h3><p className="mt-3 text-sm font-bold leading-7">Codex を主軸に、「人（自分）が目的を投げる → AI が実装・調査・修正を返す → 人が確認して方向修正する」サイクルで開発しています。AI が書いてきたコードに対しては、「動いたけど怪しい」という違和感センサーで気づき、UI/UX 観点でのレビューを自分の判断で行います。</p></Panel></section>
    <section className="relative mt-10 space-y-4"><Heading>代表PR（GitHub 深掘り導線）</Heading>{myKitchenPrs.map(([num,title,body])=><a key={num} href={`https://github.com/ohiromeya-web-hands-on/app_my-recipe/pull/${num}`} className={`group relative z-10 block rounded-[24px] border-[3px] border-[#f1b1c0] bg-white p-5 transition duration-200 hover:-translate-y-1 hover:bg-[#fff8bc] hover:shadow-md focus-visible:-translate-y-1 focus-visible:bg-[#fff8bc] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#db8a9d]/35 ${num === 27 ? "pb-[142px]" : ""}`}><h3 className={`${num === 21 ? "pr-10" : ""} font-black text-[#db8a9d] transition-colors group-hover:text-[#c4667e]`}>▶ PR #{num} — {title}</h3><p className="mt-2 text-sm font-bold leading-7">{body}</p>{num === 21 && <span aria-hidden="true" className="pointer-events-none absolute right-[-18px] top-[-10px] block h-[24px] w-[74px] rotate-[20deg] overflow-hidden"><Image src={figma("mykitchen","figma-tape-transparent")} alt="" width={864} height={260} loading="eager" className="absolute left-[-8px] top-0 h-[24px] w-[104px] max-w-none" /></span>}{num === 27 && <Image src={figma("mykitchen","figma-pr")} alt="猫を抱く女の子のイラスト" width={1080} height={1350} loading="eager" className="pointer-events-none absolute -bottom-1 right-1 h-auto w-[132px]" />}</a>)}</section>
    <section className="mt-12"><Heading>サブスクリーンショット</Heading><div className="relative mt-5 grid gap-4 overflow-hidden rounded-[38px] bg-[#c3e3ff] p-4">{["figma-sub-1","figma-sub-2"].map(name=><div key={name} className="aspect-[566/440] overflow-hidden rounded-[22px] bg-white"><Image src={figma("mykitchen",name)} alt="MyKitchenのサブ画面" width={800} height={620} className="h-full w-full object-cover object-left-top" /></div>)}{["figma-sub-3","figma-sub-4"].map(name=><div key={name} className="aspect-[566/440] overflow-hidden rounded-[22px] bg-white"><Image src={figma("mykitchen",name)} alt="MyKitchenのサブ画面" width={800} height={620} className="h-full w-[137%] max-w-none object-fill object-left-top" /></div>)}</div></section>
    <section className="mt-12"><Heading>品質指標</Heading><div className="mt-5 grid gap-3"><Panel><div className="grid grid-cols-[76px_1fr] items-center gap-4"><p className="text-center text-[32px] font-black leading-none text-[#db8a9d]">98</p><div><p className="text-sm font-black leading-5">PageSpeed Insights<br />パフォーマンススコア</p><p className="mt-1 text-xs font-bold leading-5">モバイル計測</p></div></div></Panel><Panel><div className="grid grid-cols-[76px_1fr] items-center gap-4"><p className="text-center text-[32px] font-black leading-none text-[#db8a9d]">0</p><div><p className="text-sm font-black leading-5">アクセシビリティ<br />自動チェック (axe-core)</p><p className="mt-1 text-xs font-bold leading-5">violations</p></div></div></Panel><Panel><div className="grid grid-cols-[76px_1fr] items-center gap-4"><p className="text-center font-black leading-none text-[#db8a9d]"><span className="text-[32px]">60</span><br /><span className="text-sm">commits</span></p><div><p className="text-sm font-black leading-5">継続的な開発活動</p><p className="mt-1 text-xs font-bold leading-5">47 PR（本人分）</p></div></div></Panel></div><div className="mt-7 flex justify-between text-[13px] font-bold text-[#db8a9d]"><Link href="/">← トップへ戻る</Link><Link href="/works/mogumogu">次のWorkへ →</Link></div></section>
  </>;
}

function Mogumogu() {
  const technologies = [
    "WordPress",
    "Vite",
    "Docker",
    "Official Theme",
    "DevContainer",
    "GitHub Actions",
    "Child Theme",
    "Plugin",
  ];
  const features = [
    "Instagram 埋め込み",
    "お問い合わせフォーム",
    "地図埋め込み",
    "ショートコード",
    "レスポンシブ（リキッドレイアウト）",
    "WebP 化",
    "SEO（meta description 設計）",
  ];

  return <>
    <div className="flex justify-between text-[13px] font-bold text-[#db8a9d]">
      <Link href="/">← トップへ戻る</Link>
      <Link href="/works/mykitchen">前のWorkへ ←</Link>
    </div>

    <section className="relative mt-8 pb-8">
      <h1 className="text-center text-[30px] font-black leading-[1.3] lg:text-[54px]">もぐもぐパン HP<br />WordPress 練習用</h1>
      <p className="mx-auto mt-5 max-w-[300px] text-center text-sm font-bold leading-7">架空のパン屋さん「もぐもぐパン」の<br />HPを想定した練習用サイトです。<br />パンの魅力が伝わるように、優しくて<br />親しみやすいデザインを目指しました。</p>
      <div className="relative mx-auto mt-3 h-[355px] max-w-[330px]">
        <Image src={figma("mogumogu","9")} alt="もぐもぐパンのスマートフォン表示" width={1312} height={2656} priority className="absolute left-1/2 top-0 h-auto w-[166px] -translate-x-1/2 rotate-[6deg]" />
        <Image src={figma("mogumogu","17")} alt="犬と座る女の子のイラスト" width={1080} height={1350} loading="eager" className="pointer-events-none absolute -bottom-1 right-[-12px] h-auto w-[126px]" />
      </div>
      <a href="https://mogumogupan-stg.ohiromeya.jp/" aria-label="もぐもぐパンのLive Demoを見る" className="mx-auto mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-[#db8a9d] px-4 font-black text-white">
        ▶ Live Demo
      </a>
    </section>

    <section className="mt-8 grid gap-5">
      <Panel blue>
        <Heading>概要</Heading>
        <p className="mt-4 text-sm font-bold leading-7">パン屋さんを題材にした WordPress 練習用の HP。<br />WordPress + Vite + Docker で開発しました。<br />※ 実在クライアントの案件ではなく、Web 制作でよく使う要素を全部入れる題材として、自分で選定したものです。</p>
      </Panel>
      <Panel className="relative overflow-visible pb-[132px]">
        <Heading>使用技術</Heading>
        <div className="mt-4 flex flex-wrap gap-2">{technologies.map(tag=><span key={tag} className="rounded-full bg-[#db8a9d] px-3 py-2 text-xs font-black text-white">{tag}</span>)}</div>
        <span aria-hidden="true" className="pointer-events-none absolute right-[-29px] top-[5px] block h-[25px] w-[70px] rotate-[34.8deg] overflow-hidden"><Image src={figma("mogumogu","16-tight")} alt="" width={760} height={260} className="absolute left-[-12px] top-[-2px] h-[29px] w-[94px] max-w-none mix-blend-multiply" /></span>
        <Image src={figma("mogumogu","7")} alt="ケーキを作る女の子のイラスト" width={1080} height={1350} loading="eager" className="pointer-events-none absolute -bottom-3 right-3 h-auto w-[138px]" />
      </Panel>
    </section>

    <section className="mt-12 space-y-5">
      <Heading>担当範囲 （本人が何を判断・実装したか）</Heading>
      <Panel>
        <ol className="space-y-4">
          <li>
            <div className="flex items-center gap-3 font-black text-[#db8a9d]"><span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#db8a9d] text-white">1</span>題材選定</div>
            <p className="mt-3 text-sm font-bold leading-7">与えられた課題ではなく、自分で題材を選定した。</p>
          </li>
          {["子テーマカスタマイズ全般","各機能の実装"].map((item,index)=><li key={item} className="flex items-center gap-3 font-black text-[#db8a9d]"><span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#db8a9d] text-white">{index + 2}</span>{item}</li>)}
        </ol>
      </Panel>
      <Panel>
        <h3 className="font-black text-[#db8a9d]">◆ 実装機能</h3>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm font-bold leading-7">{features.map(feature=><li key={feature}>{feature}</li>)}</ul>
      </Panel>
      <Panel>
        <h3 className="font-black text-[#db8a9d]">◆ 題材選定の理由</h3>
        <p className="mt-3 text-sm font-bold leading-7">パン屋さんを選んだのは、「身近で価格帯もわかる対象」だから。<br />そして「Web 制作でよく使う要素（地図、Instagram 連携、フォーム、ショートコード）を全部自然に入れられる題材」だから。<br />与えられた課題をこなすのではなく、Web 制作でよく使う要素を一通り扱える題材を自分で選びました。</p>
      </Panel>
      <Panel className="relative pb-[148px]">
        <h3 className="font-black text-[#db8a9d]">◆ 制作ストーリー</h3>
        <p className="mt-3 text-sm font-bold leading-7">初めての Web 制作として、デザインからコーディングまで一通り経験しました。</p>
        <Image src={figma("mogumogu","6")} alt="犬としゃがむ人物のイラスト" width={1080} height={1350} loading="eager" className="pointer-events-none absolute -bottom-2 right-2 h-auto w-[142px]" />
      </Panel>
    </section>

    <section className="relative mt-12">
      <Heading>サブスクリーンショット</Heading>
      <span aria-hidden="true" className="pointer-events-none absolute -left-2 top-[53px] z-10 block h-[24px] w-[74px] rotate-[-24.3deg] overflow-hidden"><Image src={figma("mogumogu","16-tight")} alt="" width={760} height={260} className="absolute left-[-12px] top-[-3px] h-[30px] w-[98px] max-w-none mix-blend-multiply" /></span>
      <div className="mt-5 overflow-hidden rounded-[44px] bg-[#fff7de] px-4 pb-7 pt-12">
        <div className="grid grid-cols-2 items-start gap-3">{["1","11","13","8"].map((name,index)=><Image key={name} src={figma("mogumogu",name)} alt={`もぐもぐパンのサブ画面 ${index + 1}`} width={1312} height={2656} loading="eager" className="h-auto w-full" />)}</div>
        <Image src={figma("mogumogu","15")} alt="猫と遊ぶ女の子のイラスト" width={1080} height={1350} loading="eager" className="mx-auto -mt-2 h-auto w-[156px]" />
      </div>
      <div className="mt-7 flex justify-between text-[13px] font-bold text-[#db8a9d]"><Link href="/">← トップへ戻る</Link><Link href="/works/mykitchen">前のWorkへ ←</Link></div>
    </section>
  </>;
}

export function WorkDetailPage({ slug }: { slug: WorkSlug }) {
  return <div className="work-detail min-h-screen bg-white text-[#603d23]"><Header /><main className="bg-[#f1b1c0] px-[13px] py-4 lg:px-8 lg:py-8"><article className="mx-auto max-w-xl rounded-[34px] bg-[#fffef6] px-5 py-7 shadow-sm lg:max-w-[1200px] lg:rounded-[56px] lg:px-14 lg:py-12">{slug === "mykitchen" ? <MyKitchen /> : <Mogumogu />}<footer className="mt-12 border-t-2 border-[#f1b1c0] py-8 text-center text-sm font-black text-[#db8a9d]"><div className="flex flex-col items-center gap-5"><Link href="/" aria-label="トップへ戻る"><Image src={asset("logo.png")} alt="" width={82} height={44} className="h-auto w-[74px]" /></Link><nav className="flex flex-wrap justify-center gap-x-4 gap-y-2"><Link href="/">Top</Link><Link href="/#about">About</Link><Link href="/#works">Works</Link><Link href="/#skills">Skills</Link><Link href="/#contact">Contact</Link></nav><p className="text-xs">© 2026 ASAHI KUROSU</p></div></footer></article></main></div>;
}
