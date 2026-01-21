export default function Home() {
  return (
    <main className="container">
      {/* NAV */}
      <div className="nav">
        <div className="brand">
          <div className="brandIcon" aria-label="Tsuki Design Lab logo">
            <img
              src="/images/brand-mark.png"
              alt="茲奇製研所"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="brandTexts">
            <div className="brandName">茲奇製研所</div>
            <div className="brandSub">Tsuki Design & Innovation Lab</div>
          </div>
          <span className="badge">持續創造的設計研究所</span>
        </div>

        <div className="navLinks">
          <a className="btn btnGhost" href="#stellarvision">產品</a>
          <a className="btn btnGhost" href="#why">理念</a>
          <a className="btn btnPrimary" href="#contact">合作 / 聯絡</a>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="panel heroMain">
          <div className="kicker">
            <span className="dot" />
            2–8 歲｜已測試｜視覺 × 專注 × 協調
          </div>

          <h1 className="h1">把專業視覺訓練，做成孩子每天都想玩的任務</h1>
          <p className="sub">
            溫暖、創造力、活力與生活感的設計實驗室。<br />
            我們以研究與實測迭代，打造能在家或校園落地的兒童健康教具。
          </p>

          <div className="ctaRow">
            <a className="btn btnPrimary" href="#stellarvision">看 StellarVision</a>
            <a className="btn" href="#contact">聯絡我們</a>
          </div>

          <div className="hr" />

          <div className="grid">
            <div className="card">
              <div className="cardTitle">減少過早視力風險</div>
              <div className="cardText">針對早期近視、視覺發展不足等常見問題</div>
            </div>
            <div className="card">
              <div className="cardTitle">手眼協調 × 注意力</div>
              <div className="cardText">在遊戲流程中自然訓練追視、對焦與專注</div>
            </div>
            <div className="card">
              <div className="cardTitle">專業背書與延伸活動</div>
              <div className="cardText">職能治療師與眼科醫師把關，可接課程/活動</div>
            </div>
          </div>
        </div>

        <div className="panel" aria-label="StellarVision photo">
          <img className="heroImg" src="/images/stellarvision.jpg" alt="StellarVision" />
        </div>
      </section>

      {/* PRODUCT */}
      <section id="stellarvision" className="panel section">
        <h2 className="h2">StellarVision</h2>
        <p className="sub" style={{ marginTop: 0 }}>
          2–8 歲兒童視覺訓練與專注力培養教具（已測試）。
          針對家長最痛的點：孩童太早有視力相關問題（例如近視）、手眼不協調、注意力不足。
        </p>

        <div className="grid">
          <div className="card">
            <div className="cardTitle">遊戲化讓孩子「願意練」</div>
            <div className="cardText">不靠說教，用可重複的任務機制建立習慣</div>
          </div>
          <div className="card">
            <div className="cardTitle">多種能力訓練</div>
            <div className="cardText">視覺刺激、眼球追視、色彩辨識、協調與專注</div>
          </div>
          <div className="card">
            <div className="cardTitle">可延伸到課程與活動</div>
            <div className="cardText">家庭日常、幼兒園、校園活動都可導入</div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="panel section">
        <h2 className="h2">為什麼要做這個？</h2>
        <p className="sub" style={{ marginTop: 0 }}>
          數位生活讓孩子更早接觸大量近距離用眼，視覺與專注問題提早出現。
          我們不想再用「提醒少滑手機」這種無力口號，而是把專業訓練做成可落地的日常工具。
        </p>
      </section>

      {/* FIT */}
      <section className="panel section">
        <h2 className="h2">適合誰？</h2>
        <div className="grid">
          <div className="card">
            <div className="cardTitle">孩童</div>
            <div className="cardText">在遊戲中自然訓練視覺能力與專注力</div>
          </div>
          <div className="card">
            <div className="cardTitle">家長</div>
            <div className="cardText">安心、可理解、可陪玩的專業教具</div>
          </div>
          <div className="card">
            <div className="cardTitle">教育端</div>
            <div className="cardText">可導入課程與活動，形成教學模組</div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="panel section">
        <h2 className="h2">團隊</h2>
        <p className="sub" style={{ marginTop: 0 }}>
          茲奇製研所是一個以設計研究為核心的新創團隊，聚焦孩童健康、教育與永續。
          我們用快速原型與實測迭代，把概念做成真的能被使用的產品。
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="panel section">
        <h2 className="h2">IG / 社群 & 聯絡</h2>
        <div className="ctaRow">
          {/* TODO: 把 IG 連結換成你的 */}
          <a className="btn" href="https://www.instagram.com/tsuki_lab25/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="btn btnPrimary" href="mailto:tsukidesignlab@gmail.com">
            tsukidesignlab@gmail.com
          </a>
        </div>

        <div className="footer">
          <span>© {new Date().getFullYear()} 茲奇製研所 Tsuki Design & Innovation Lab</span>
          <span className="badge">StellarVision · Prototype Tested</span>
        </div>
      </section>
    </main>
  );
}
