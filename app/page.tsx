import WaitlistForm from "./WaitlistForm";

export default function Home() {
  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-K7MPBW9V"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>

      <header className="hero band">
        <div className="wrap">
          <nav aria-label="RivalSight">
            <a className="logo" href="https://rivalsight.io/" aria-label="RivalSight home">
              <span className="mark">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" aria-hidden="true">
                  <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <span className="word"><b>RivalSight</b><span>Competitor Intelligence</span></span>
            </a>
            <span className="pill"><i />Launching early 2027</span>
          </nav>

          <div className="grid">
            <main>
              <h1>See every move your competitors make.</h1>
              <p className="lede">RivalSight is AI competitor monitoring for online stores. We watch your rivals’ prices, promotions, stock and new launches, then tell you what changed and what to do about it, every week, with urgent alerts when a big move can’t wait.</p>
              <WaitlistForm />
              <p className="fine">Early access + a 14-day free trial at launch. No credit card needed.</p>
            </main>

            <div className="fig" aria-hidden="true">
              <svg viewBox="0 0 400 400">
                <defs>
                  <radialGradient id="scope" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#2A1A10" /><stop offset="1" stopColor="#151515" /></radialGradient>
                  <linearGradient id="sw" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#EA580C" stopOpacity="0" /><stop offset="1" stopColor="#EA580C" stopOpacity=".55" /></linearGradient>
                </defs>
                <circle cx="200" cy="200" r="190" fill="url(#scope)" stroke="rgba(255,255,255,.14)" strokeWidth="1.5" />
                <g fill="none" stroke="rgba(255,255,255,.1)">
                  <circle cx="200" cy="200" r="142" /><circle cx="200" cy="200" r="95" /><circle cx="200" cy="200" r="48" />
                  <path d="M10 200H390M200 10V390" />
                </g>
                <path className="sweep" d="M200 200 L390 200 A190 190 0 0 0 334 66 Z" fill="url(#sw)" />
                <g className="blip"><circle cx="292" cy="128" r="16" fill="#EA580C" opacity=".22" /><circle cx="292" cy="128" r="7" fill="#F97316" /></g>
                <circle cx="118" cy="150" r="5" fill="#fff" opacity=".75" />
                <circle cx="262" cy="276" r="5" fill="#fff" opacity=".75" />
                <circle cx="150" cy="248" r="4" fill="#fff" opacity=".5" />
                <circle cx="320" cy="232" r="4" fill="#fff" opacity=".5" />
                <circle cx="200" cy="200" r="9" fill="#EA580C" /><circle cx="200" cy="200" r="3.5" fill="#fff" />
              </svg>
              <span className="tag">Sample alert</span>
              <div className="alert">
                <div className="t"><i />Urgent alert</div>
                <p>A main rival cut your best seller’s price by <b>22%</b> this morning.</p>
                <small>Suggested move: hold price, push a bundle offer this weekend.</small>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="band" aria-labelledby="what">
        <div className="wrap">
          <h2 id="what">Everything your rivals change, in one place</h2>
          <p className="sub">Stop refreshing competitor websites. RivalSight compares the whole offer, not just the price tag.</p>
          <ul className="track">
            <li>Prices</li><li>Promotions &amp; discounts</li><li>Stock availability</li><li>New product launches</li><li>Delivery cost &amp; speed</li><li>Returns policy</li><li>Reviews</li><li>Product range</li>
          </ul>

          <div className="cards">
            <article className="card">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h8M8 17h5" /></svg>
              <h3>Weekly intelligence report</h3>
              <p>A clear summary of what changed at each competitor, what it means for your store, and the actions worth taking.</p>
            </article>
            <article className="card">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></svg>
              <h3>Urgent alerts</h3>
              <p>Checked daily. When a rival makes a big move, like a deep cut on a best seller, you hear about it the same day.</p>
            </article>
            <article className="card">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-6" /></svg>
              <h3>Live dashboard</h3>
              <p>Log in any time to see price trends, promotions and market position across all the competitors you track.</p>
            </article>
            <article className="card">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a9 9 0 1 1-3-6.7L21 8" /><path d="M21 3v5h-5" /></svg>
              <h3>Smart repricing</h3>
              <p>Autopilot or approve-first repricing with your own floors and ceilings, starting with Shopify and WooCommerce.</p>
            </article>
          </div>

          <div className="cta">
            <div>
              <h2>Be first to try RivalSight</h2>
              <p>Waitlist members get early access and a 14-day free trial.</p>
            </div>
            <a href="#email">Join the waitlist</a>
          </div>
        </div>
      </section>

      <footer className="band">
        <span>© 2026 RivalSight · <a href="mailto:support@rivalsight.io">support@rivalsight.io</a></span>
        <nav aria-label="Social">
          <a href="https://www.linkedin.com/company/rivalsight" rel="noopener">LinkedIn</a>
          <a href="https://www.instagram.com/rivalsight.io" rel="noopener">Instagram</a>
          <a href="https://www.facebook.com/RivalSight.io/" rel="noopener">Facebook</a>
        </nav>
      </footer>
    </>
  );
}
