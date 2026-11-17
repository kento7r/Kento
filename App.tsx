import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Send, Radio, Copy, Check, Sparkles, MoveUpRight, Globe2, Fingerprint } from 'lucide-react';
import { useState } from 'react';

const PROFILE = 'https://t.me/iuxier';
const CHANNEL = 'https://t.me/GrabTGNow';

function App() {
  const [copied, setCopied] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, rgba(142,112,255,.13), transparent 72%)`;

  const copyHandle = async () => {
    try {
      await navigator.clipboard.writeText('@iuxier');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch { window.location.href = PROFILE; }
  };

  return (
    <main className="site-shell" onMouseMove={(e) => { mx.set(e.clientX); my.set(e.clientY); }}>
      <motion.div className="cursor-glow" style={{ background: glow }} />
      <div className="grain" />
      <nav className="nav wrap">
        <a className="wordmark" href="#home">KENTO<span>.</span></a>
        <div className="nav-right"><span className="availability"><i /> AVAILABLE ONLINE</span><a className="nav-link" href={PROFILE} target="_blank" rel="noreferrer">LET'S CONNECT <ArrowUpRight size={14}/></a></div>
      </nav>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <Sparkles size={13}/> PERSONAL DIGITAL IDENTITY <span className="eyebrow-line"/>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, delay: .12 }}>
            A LITTLE<br/>ABOUT <em>ME.</em>
          </motion.h1>
          <motion.p className="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5, duration: .8 }}>
            I'm <strong>Kento</strong> — an independent digital entrepreneur with a passion for building, curating and trading in the digital space.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65 }}>
            <a className="button button-primary" href={PROFILE} target="_blank" rel="noreferrer"><Send size={16}/> CONNECT WITH ME <ArrowUpRight size={16}/></a>
            <a className="text-action" href="#about">DISCOVER MORE <span>↓</span></a>
          </motion.div>
        </div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .88, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.1, delay: .2, ease: [.16,1,.3,1] }}>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="art-core">
            <div className="core-top"><span>IDENTITY / 001</span><Fingerprint size={19}/></div>
            <div className="monogram">K<span>.</span></div>
            <div className="core-bottom"><span>INDEPENDENT</span><span>DIGITAL ERA</span></div>
          </div>
          <div className="floating-tag tag-top"><span className="tag-dot"/> DIGITAL ENTREPRENEUR</div>
          <div className="floating-tag tag-bottom"><Globe2 size={13}/> CONNECTED WORLDWIDE</div>
          <div className="crosshair cross-a">+</div><div className="crosshair cross-b">+</div>
        </motion.div>
        <div className="hero-index"><span>01 / 03</span><span>SCROLL TO EXPLORE</span></div>
      </section>

      <section className="about-section" id="about">
        <div className="wrap about-grid">
          <div className="section-kicker"><span>01 — THE INTRODUCTION</span><div className="kicker-line"/></div>
          <div className="about-content">
            <h2>Not just a username.<br/><span>A digital identity.</span></h2>
            <p>I believe in keeping things intentional, simple and distinctive. I operate in the Telegram ecosystem, connecting people with digital account opportunities through my dedicated channel.</p>
            <div className="traits"><span>01 / DIGITAL COMMERCE</span><span>02 / TELEGRAM ECOSYSTEM</span><span>03 / INDEPENDENT MINDSET</span></div>
          </div>
        </div>
      </section>

      <section className="connect-section wrap" id="connect">
        <div className="section-kicker"><span>02 — FIND ME ONLINE</span><div className="kicker-line"/></div>
        <div className="connect-heading"><h2>THE RIGHT<br/><em>CONNECTION.</em></h2><p>One profile. One channel.<br/>Stay connected.</p></div>
        <div className="link-cards">
          <motion.a whileHover={{ y: -7 }} className="link-card" href={PROFILE} target="_blank" rel="noreferrer">
            <div className="card-top"><span className="card-label">PERSONAL PROFILE</span><ArrowUpRight size={19}/></div>
            <div className="card-icon"><Send size={22}/></div>
            <div className="card-title">@iuxier</div>
            <div className="card-bottom"><span>LET'S TALK ON TELEGRAM</span><span className="round-arrow"><MoveUpRight size={16}/></span></div>
          </motion.a>
          <motion.a whileHover={{ y: -7 }} className="link-card channel-card" href={CHANNEL} target="_blank" rel="noreferrer">
            <div className="card-top"><span className="card-label">OFFICIAL CHANNEL</span><ArrowUpRight size={19}/></div>
            <div className="card-icon"><Radio size={22}/></div>
            <div className="card-title">GrabTGNow</div>
            <div className="card-description">Telegram accounts marketplace</div>
            <div className="card-bottom"><span>EXPLORE THE CHANNEL</span><span className="round-arrow"><MoveUpRight size={16}/></span></div>
          </motion.a>
        </div>
      </section>

      <section className="closing wrap">
        <div className="closing-rule"/>
        <span className="closing-kicker">THANK YOU FOR STOPPING BY</span>
        <h2>SEE YOU<br/><em>ON TELEGRAM.</em></h2>
        <a className="button button-primary" href={PROFILE} target="_blank" rel="noreferrer">SAY HELLO <ArrowUpRight size={16}/></a>
      </section>

      <footer className="footer wrap">
        <a className="wordmark" href="#home">KENTO<span>.</span></a>
        <span>© {new Date().getFullYear()} KENTO. ALL RIGHTS RESERVED.</span>
        <button className="copy-button" onClick={copyHandle}>{copied ? <Check size={14}/> : <Copy size={14}/>} {copied ? 'COPIED' : 'COPY @IUXIER'}</button>
      </footer>
    </main>
  );
}
export default App;