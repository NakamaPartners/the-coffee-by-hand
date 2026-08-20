import { useState } from "react";

const photos = {
  menuCover: "/menu-cover.jpg",
};

const orderUrl = "https://www.doordash.com/store/the-coffee-by-hand-duluth-903283/";

function HandLine() {
  return (
    <svg className="hero-handline" viewBox="0 0 760 430" fill="none" aria-hidden="true">
      <path d="M31 325c46-71 106-85 163-47 36 24 76 34 115 12 42-23 65-70 112-84 52-16 73 41 113 49 47 10 91-37 136-32 31 4 51 25 59 55" pathLength="1" />
      <path d="M704 263c17 4 31 13 39 27-16 3-32 1-45-8" />
      <circle cx="204" cy="274" r="8" />
      <path d="M411 208c-8-34 19-69 53-66 28 3 40 27 32 48-10 27-41 38-65 25" />
    </svg>
  );
}

function Spark({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 80 80" aria-hidden="true"><path d="M40 3c1 24 13 36 37 37-24 1-36 13-37 37-1-24-13-36-37-37C27 39 39 27 40 3Z" /></svg>;
}

function BingsuSketch({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 240" fill="none" aria-hidden="true">
      <path d="M42 88c9-39 37-63 69-63 33 0 61 25 69 63" /><path d="M36 89h151l-25 109c-2 10-12 17-23 17H82c-11 0-20-7-23-17L36 89Z" /><path d="M59 117c30 14 72 17 107-1" /><circle cx="77" cy="64" r="13" /><circle cx="124" cy="47" r="16" /><path d="M143 31c7-16 27-20 38-7 7 8 5 21-4 28-9 8-23 6-30-3" /><path d="M70 219h84" />
    </svg>
  );
}

function CupSketch({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 260 220" fill="none" aria-hidden="true">
      <path d="M57 63h121l-15 129H74L57 63Z" /><path d="M46 63c20-12 121-16 145 0M73 41c18-10 71-10 90 0l14 22H60l13-22Z" /><path d="M178 88c45-9 56 55 9 69-8 2-15 1-20-2" /><path d="M89 114c16-13 37-13 53 0-14 23-38 23-53 0Z" /><path d="M217 38c11-17 27-24 42-17-2 16-11 28-27 36" />
    </svg>
  );
}

function WalkingGuest({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 340 430" fill="none" aria-hidden="true">
      <circle cx="169" cy="74" r="31" /><path d="M146 103c-24 31-31 97-23 162l87 2c7-57 1-123-20-164" /><path d="M126 135c-31 17-48 58-62 92M205 135c25 19 45 46 62 76" /><path d="M64 227c14 9 32 9 46 0M266 211c16 8 31 7 44-4" /><path d="M138 267 96 382M194 267l47 115" /><path d="M58 388h49l8-15M230 382h52" /><path d="M276 182h48l-6 57h-38l-4-57Z" /><path d="M283 167h32l8 15h-47l7-15Z" />
    </svg>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Coffee By Hand home" onClick={closeMenu}><img src="/coffee-by-hand-logo.png" alt="The Coffee By Hand" /></a>
        <nav aria-label="Primary navigation"><a href="#favorites">Favorites</a><a href="#inside">Inside</a><a href="#visit">Visit</a></nav>
        <div className="header-right">
          <button className="mobile-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>Menu</button>
          <a className="open-note" href="#visit" onClick={closeMenu}>Duluth, GA <span>Open late</span></a>
        </div>
        {menuOpen && <nav className="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation" style={{ display: "flex" }}><a href="#favorites" onClick={closeMenu}>Favorites</a><a href="#inside" onClick={closeMenu}>Inside</a><a href="#visit" onClick={closeMenu}>Visit</a></nav>}
      </header>

      <section className="hero" id="top">
        <div className="hero-photo hero-photo-left">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/hero-strawberry-matcha-poster.jpg"
            aria-label="Strawberry matcha latte being prepared"
          >
            <source src="/hero-strawberry-matcha.webm" type="video/webm" />
            <source src="/hero-strawberry-matcha.mp4" type="video/mp4" />
          </video>
          <span className="photo-tab">Strawberry Matcha Latte</span>
        </div>
        <div className="hero-photo hero-photo-right">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/hero-right-bingsu-poster.jpg"
            aria-label="Bingsu being prepared at The Coffee By Hand"
          >
            <source src="/hero-right-bingsu.webm" type="video/webm" />
            <source src="/hero-right-bingsu.mp4" type="video/mp4" />
          </video>
          <span className="photo-tab">as good as they look</span>
        </div>
        <div className="hero-copy"><span className="korean-name" lang="ko">커피 바이 핸드</span><h1><span>Coffee</span><span className="by-hand">By Hand</span></h1><p>Korean desserts, coffee, and a good reason to stay awhile.</p></div>
        <a className="hero-cta hero-cta-menu" href="#favorites">See the favorites <span>↘</span></a>
        <a className="hero-cta hero-cta-visit" href="#visit">Find us in Duluth <span>↗</span></a>
        <span className="scribble-note scribble-one">sweet things happen here</span><span className="scribble-note scribble-two">made for two spoons</span>
        <Spark className="spark spark-one" /><Spark className="spark spark-two" /><HandLine />
      </section>

      <section className="ticker" aria-label="Menu highlights"><div className="ticker-track"><span>Bingsu</span><i>✦</i><span>Croffles</span><i>✦</i><span>Coffee</span><i>✦</i><span>Tea</span><i>✦</i><span>Bingsu</span><i>✦</i><span>Croffles</span><i>✦</i><span>Coffee</span><i>✦</i><span>Tea</span><i>✦</i></div></section>

      <section className="statement" id="about">
        <span className="section-number">01 / HELLO</span><h2>Come for<span>something sweet.</span>Stay past sunset.</h2>
        <div className="statement-photo"><img src="/statement-plates.jpg" alt="A plated dessert and coffee at The Coffee By Hand" /><span>2180 Pleasant Hill Rd</span></div>
        <BingsuSketch className="bingsu-sketch" /><p className="statement-copy">A Korean café in the heart of Duluth for bingsu, croffles, coffee, tea, and the kind of evenings that take their time.</p><span className="statement-korean" lang="ko">천천히, 맛있게</span>
      </section>

      <section className="favorites" id="favorites">
        <aside className="favorites-label"><span>02</span><strong>Pick a favorite</strong><p>Sweet, warm, cold, creamy, crisp.</p></aside>
        <div className="favorites-stage"><div className="menu-cover"><img src={photos.menuCover} alt="Desserts and drinks from The Coffee By Hand" /><span className="menu-cover-note">choose with your eyes first</span></div><div className="favorites-list">
          <a href={orderUrl} target="_blank" rel="noreferrer"><span>01</span><strong>Mango Snowflake</strong><small>cold + bright</small></a>
          <a href={orderUrl} target="_blank" rel="noreferrer"><span>02</span><strong>Chocolate Oreo Snowflake</strong><small>deep + creamy</small></a>
          <a href={orderUrl} target="_blank" rel="noreferrer"><span>03</span><strong>Honey Croffle</strong><small>warm + crisp</small></a>
          <a href={orderUrl} target="_blank" rel="noreferrer"><span>04</span><strong>Coffee &amp; Tea</strong><small>all evening</small></a>
        </div></div>
        <aside className="favorites-rotated"><span>Made to share</span><BingsuSketch className="favorites-bowl" /></aside>
      </section>

      <section className="inside" id="inside">
        <img className="inside-photo" src="/inside-background.jpg" alt="The warm interior at The Coffee By Hand" /><div className="inside-wash" />
        <h2>A little room<span>for your whole evening.</span></h2><p>Booths, private study rooms, free WiFi, and enough time for one more cup.</p><span className="inside-side">03 / INSIDE</span><CupSketch className="inside-cup" /><div className="inside-caption"><span>work</span><span>talk</span><span>dessert</span><span>repeat</span></div>
      </section>

      <section className="visit" id="visit">
        <div className="visit-object"><div className="storefront-frame"><img src="/visit-coffee.jpg" alt="Coffee being served at The Coffee By Hand" /><span>you are here</span></div><WalkingGuest className="walking-guest" /></div>
        <div className="visit-copy"><span className="section-number">04 / COME OVER</span><h2>Meet us in Duluth.</h2><div className="visit-details"><div><small>Address</small><p>2180 Pleasant Hill Road<br />Duluth, GA 30096</p></div><div><small>Hours</small><p>Daily, 11 AM to 11 PM<br />Friday and Saturday until midnight</p></div><div><small>Call</small><p><a href="tel:+17702328850">770 232 8850</a></p></div></div><div className="visit-actions"><a href="https://www.google.com/maps/search/?api=1&query=2180+Pleasant+Hill+Road+Duluth+GA+30096" target="_blank" rel="noreferrer">Get directions <span>↗</span></a><a href="https://www.instagram.com/thecoffeebyhandatl/" target="_blank" rel="noreferrer">Instagram <span>↗</span></a></div></div>
      </section>

      <section className="closing"><p>COFFEE, SOMETHING SWEET, AND A PLACE TO STAY AWHILE.</p><h2>See you by hand.</h2><img src="/coffee-by-hand-logo.png" alt="" /><span className="closing-korean" lang="ko">커피 바이 핸드</span></section>
       <footer><span>THE COFFEE BY HAND © 2026</span><span className="footer-credit">Built by Studio 1801</span><a href="#top">Back to top ↑</a><span>DULUTH, GEORGIA</span></footer>
    </main>
  );
}

function App() {
  return <Home />;
}

export default App;
