/* ============================================================
   Maison Mélisse — composants partagés
   ============================================================ */
const { useState, useEffect, useRef, useMemo } = React;

/* ---------------- Icônes (stroke, style fin artisanal) ------------- */
function Icon({ name, size = 22, stroke = 1.6, style }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round", style };
  switch (name) {
    case 'cart': return (<svg {...p}><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h2.2l2.2 12.4a1.5 1.5 0 0 0 1.5 1.2h8.8a1.5 1.5 0 0 0 1.5-1.2L20 7H5.2"/></svg>);
    case 'user': return (<svg {...p}><circle cx="12" cy="8" r="3.6"/><path d="M5 20a7 7 0 0 1 14 0"/></svg>);
    case 'search': return (<svg {...p}><circle cx="11" cy="11" r="6.5"/><path d="m20 20-3.5-3.5"/></svg>);
    case 'menu': return (<svg {...p}><path d="M3 6h18M3 12h18M3 18h18"/></svg>);
    case 'close': return (<svg {...p}><path d="M6 6l12 12M18 6 6 18"/></svg>);
    case 'plus': return (<svg {...p}><path d="M12 5v14M5 12h14"/></svg>);
    case 'minus': return (<svg {...p}><path d="M5 12h14"/></svg>);
    case 'arrow': return (<svg {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case 'arrow-left': return (<svg {...p}><path d="M19 12H5M11 6l-6 6 6 6"/></svg>);
    case 'check': return (<svg {...p}><path d="M20 6 9 17l-5-5"/></svg>);
    case 'star': return (<svg {...p} fill="currentColor" stroke="none"><path d="M12 2.5l2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L12 16l-5.5 3.1 1.4-6.1L3.2 8.8l6.2-.6z"/></svg>);
    case 'lock': return (<svg {...p}><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>);
    case 'truck': return (<svg {...p}><path d="M2 7h11v9H2zM13 10h4l3 3v3h-7"/><circle cx="6" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>);
    case 'hand': return (<svg {...p}><path d="M7 11V5.5a1.5 1.5 0 0 1 3 0V11M10 10.5V4.5a1.5 1.5 0 0 1 3 0V11M13 5.5a1.5 1.5 0 0 1 3 0V12M16 8.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1.5a6 6 0 0 1-5.2-3L4 14.5a1.6 1.6 0 0 1 2.6-1.8L8 14"/></svg>);
    case 'farm': return (<svg {...p}><path d="M3 21V9l9-5 9 5v12M9 21v-6h6v6"/></svg>);
    case 'bee': return (<svg {...p}><ellipse cx="12" cy="14" rx="4" ry="5"/><path d="M8.5 11.5h7M8.3 14.5h7.4M9 17.5h6"/><path d="M12 9V7M10 5.5 7 3.5M14 5.5 17 3.5"/><path d="M8 11C5 9.5 4 11 4.5 12.5 5 14 8 13.5 8 13.5M16 11c3-1.5 4 0 3.5 1.5C19 14 16 13.5 16 13.5"/></svg>);
    case 'leaf': return (<svg {...p}><path d="M4 20c0-9 7-14 16-14 0 9-7 14-16 14Z"/><path d="M4 20C8 14 12 11 17 9"/></svg>);
    case 'clock': return (<svg {...p}><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>);
    case 'heart': return (<svg {...p}><path d="M12 20s-7-4.5-9.2-9C1.3 8 3 4.5 6.3 4.5 8.4 4.5 12 7 12 7s3.6-2.5 5.7-2.5C21 4.5 22.7 8 21.2 11 19 15.5 12 20 12 20Z"/></svg>);
    case 'drop': return (<svg {...p}><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/></svg>);
    case 'instagram': return (<svg {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor"/></svg>);
    case 'facebook': return (<svg {...p}><path d="M14 8.5h2.5V5H14c-2 0-3.5 1.5-3.5 3.5V11H8v3.5h2.5V21H14v-6.5h2.3l.5-3.5H14V9c0-.3.2-.5.5-.5Z"/></svg>);
    case 'mail': return (<svg {...p}><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>);
    case 'phone': return (<svg {...p}><path d="M5 4h3.5l1.5 4.5-2 1.5a11 11 0 0 0 5 5l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>);
    case 'pin': return (<svg {...p}><path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>);
    case 'pot': return (<svg {...p}><path d="M7 9h10l-1 9a2 2 0 0 1-2 1.7H10A2 2 0 0 1 8 18Z"/><path d="M6.5 6.5h11v2.5h-11z"/><path d="M9 6.5V4.5h6v2"/></svg>);
    default: return null;
  }
}

/* ---------------- Étoiles de notation ---------------- */
function Stars({ value = 5, size = 14 }) {
  return (
    <span style={{ display: 'inline-flex', gap: 2, color: 'var(--honey-deep)' }}>
      {[0,1,2,3,4].map(i => (
        <span key={i} style={{ opacity: i < Math.round(value) ? 1 : 0.25 }}>
          <Icon name="star" size={size} />
        </span>
      ))}
    </span>
  );
}

/* ---------------- Bouton ---------------- */
function Btn({ children, variant = 'solid', size = 'md', full, onClick, type, style, disabled }) {
  const sizes = {
    sm: { padding: '9px 18px', fontSize: 13 },
    md: { padding: '13px 26px', fontSize: 14 },
    lg: { padding: '16px 34px', fontSize: 15 },
  };
  const base = {
    fontFamily: 'var(--ui)', fontWeight: 600, letterSpacing: '0.04em',
    borderRadius: 'var(--r-pill)', border: '1.5px solid transparent',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9,
    cursor: disabled ? 'not-allowed' : 'pointer', transition: 'all .22s ease',
    width: full ? '100%' : 'auto', opacity: disabled ? 0.5 : 1,
    textTransform: 'none', whiteSpace: 'nowrap', ...sizes[size],
  };
  const variants = {
    solid: { background: 'var(--brown-800)', color: 'var(--paper)', borderColor: 'var(--brown-800)' },
    honey: { background: 'var(--honey)', color: 'var(--brown-900)', borderColor: 'var(--honey)' },
    outline: { background: 'transparent', color: 'var(--brown-800)', borderColor: 'var(--brown-700)' },
    ghost: { background: 'transparent', color: 'var(--brown-700)', borderColor: 'transparent' },
    light: { background: 'var(--paper-card)', color: 'var(--brown-800)', borderColor: 'var(--line)' },
  };
  const [hov, setHov] = useState(false);
  const hovStyles = !disabled && hov ? {
    solid: { background: 'var(--brown-700)' },
    honey: { background: 'var(--honey-deep)' },
    outline: { background: 'var(--brown-800)', color: 'var(--paper)' },
    ghost: { background: 'rgba(122,88,40,0.10)' },
    light: { borderColor: 'var(--honey)', background: '#fff' },
  }[variant] : {};
  return (
    <button type={type || 'button'} onClick={disabled ? undefined : onClick} disabled={disabled}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ ...base, ...variants[variant], ...hovStyles, ...style }}>
      {children}
    </button>
  );
}

/* ============================================================
   ProductImage — pot de miel stylisé sur fond texturé.
   Sert de "photo produit" placeholder, cohérente & brandée.
   ============================================================ */
function HoneyJar({ p, w = 130 }) {
  const h = w * 1.32;
  return (
    <svg width={w} height={h} viewBox="0 0 130 172" style={{ display: 'block', filter: 'drop-shadow(0 14px 20px rgba(40,25,10,0.28))' }}>
      <defs>
        <linearGradient id={`glass-${p.id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={p.color} stopOpacity="0.96"/>
          <stop offset="0.5" stopColor={p.color}/>
          <stop offset="1" stopColor={p.color} stopOpacity="0.82"/>
        </linearGradient>
        <linearGradient id={`shine-${p.id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0.40"/>
          <stop offset="0.25" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {/* lid */}
      <rect x="38" y="6" width="54" height="20" rx="5" fill={p.lid}/>
      <rect x="34" y="22" width="62" height="13" rx="4" fill={p.cap}/>
      {/* jar body */}
      <path d="M30 40 q35 -9 70 0 l4 96 q0 22 -22 22 H48 q-22 0 -22 -22 Z" fill={`url(#glass-${p.id})`}/>
      {/* honey level */}
      <path d="M30 64 q35 -7 70 0 l2.5 72 q0 22 -22 22 H50 q-22 0 -22 -22 Z" fill="#000" opacity="0.10"/>
      {/* label */}
      <rect x="40" y="78" width="50" height="52" rx="7" fill="var(--paper)" opacity="0.96"/>
      <rect x="40" y="78" width="50" height="52" rx="7" fill="none" stroke={p.lid} strokeOpacity="0.5" strokeWidth="1.2"/>
      <text x="65" y="97" textAnchor="middle" fontFamily="var(--script)" fontSize="14" fill="var(--brown-800)">Mélisse</text>
      <line x1="48" y1="103" x2="82" y2="103" stroke={p.lid} strokeOpacity="0.4" strokeWidth="0.8"/>
      <text x="65" y="118" textAnchor="middle" fontFamily="var(--ui)" fontWeight="700" fontSize="8.5" letterSpacing="0.5" fill="var(--brown-700)" style={{ textTransform: 'uppercase' }}>
        {p.badge}
      </text>
      {/* shine */}
      <path d="M30 40 q35 -9 70 0 l4 96 q0 22 -22 22 H48 q-22 0 -22 -22 Z" fill={`url(#shine-${p.id})`}/>
    </svg>
  );
}

function ProductImage({ p, ratio = '4/5', rounded = 'var(--r-md)', showName = false, w }) {
  return (
    <div className="hexbg" style={{
      position: 'relative', aspectRatio: ratio, borderRadius: rounded, overflow: 'hidden',
      display: 'grid', placeItems: 'center',
      backgroundColor: p.color,
      backgroundImage:
        `radial-gradient(120% 90% at 50% -10%, rgba(255,255,255,0.22), transparent 55%),` +
        `radial-gradient(90% 80% at 50% 120%, rgba(40,22,8,0.40), transparent 60%),` +
        `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.10' stroke-width='2'%3E%3Cpath d='M28 0 L56 16 L56 50 L28 66 L0 50 L0 16 Z'/%3E%3Cpath d='M28 66 L56 82 L56 116 L28 132 L0 116 L0 82 Z'/%3E%3C/g%3E%3C/svg%3E")`,
    }}>
      <HoneyJar p={p} w={w || 132} />
      {showName && (
        <div style={{ position: 'absolute', left: 14, bottom: 12, color: 'var(--paper)',
          fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 22, textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
          {p.name}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   Carte produit
   ============================================================ */
function ProductCard({ p, onOpen, onAdd }) {
  const [hov, setHov] = useState(false);
  const out = p.stock === 0;
  return (
    <article
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={() => onOpen(p.id)}
      style={{
        background: 'var(--paper-card)', borderRadius: 'var(--r-lg)', overflow: 'hidden',
        border: '1px solid var(--line)', cursor: 'pointer',
        boxShadow: hov ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: hov ? 'translateY(-4px)' : 'none', transition: 'all .28s ease',
        display: 'flex', flexDirection: 'column',
      }}>
      <div style={{ position: 'relative' }}>
        <ProductImage p={p} ratio="1/1" rounded="0" />
        <span style={{ position: 'absolute', top: 12, left: 12, background: 'var(--paper)', color: 'var(--brown-700)',
          fontFamily: 'var(--ui)', fontWeight: 600, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '5px 11px', borderRadius: 'var(--r-pill)' }}>{p.badge}</span>
        {out && <span style={{ position: 'absolute', top: 12, right: 12, background: 'var(--brown-800)', color: 'var(--paper)',
          fontFamily: 'var(--ui)', fontWeight: 600, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '5px 11px', borderRadius: 'var(--r-pill)' }}>Épuisé</span>}
      </div>
      <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <Stars value={p.rating} size={12} />
          <span className="ui" style={{ fontSize: 12, color: 'var(--ink-faint)' }}>{p.reviews} avis</span>
        </div>
        <h3 className="display" style={{ margin: '2px 0 5px', fontSize: 25, fontWeight: 600 }}>{p.name}</h3>
        <p style={{ margin: 0, fontSize: 14.5, color: 'var(--ink-soft)', lineHeight: 1.5, flex: 1 }}>{p.short}</p>
        <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <span className="ui" style={{ fontSize: 19, fontWeight: 700, color: 'var(--brown-800)' }}>
            {p.sizes.length > 1 ? 'dès ' : ''}{eur(p.price)}
          </span>
          {out ? (
            <span className="ui" style={{ fontSize: 13, color: 'var(--ink-faint)' }}>Bientôt de retour</span>
          ) : (
            <Btn size="sm" variant={hov ? 'honey' : 'light'} onClick={(e) => { e.stopPropagation(); onAdd(p.id, p.sizes[0].g, 1); }}>
              <Icon name="plus" size={15} /> Ajouter
            </Btn>
          )}
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   Header / navigation
   ============================================================ */
function Header({ route, nav, cartCount, onCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h); h();
    return () => window.removeEventListener('scroll', h);
  }, []);
  const links = [
    { id: 'home', label: "Accueil" },
    { id: 'shop', label: "La boutique" },
    { id: 'story', label: "Notre histoire" },
    { id: 'contact', label: "Contact" },
  ];
  const onAnnounce = route === 'home' && !scrolled;
  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: scrolled ? 'rgba(251,245,233,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'all .3s ease',
      }}>
        <div className="wrap" style={{ height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          {/* left nav (desktop) */}
          <nav className="hdr-links" style={{ display: 'flex', gap: 26, flex: 1 }}>
            {links.map(l => (
              <a key={l.id} onClick={() => nav(l.id)} style={{
                fontFamily: 'var(--ui)', fontSize: 14, fontWeight: 500, cursor: 'pointer',
                color: route === l.id ? 'var(--amber)' : 'var(--brown-700)',
                borderBottom: route === l.id ? '2px solid var(--amber)' : '2px solid transparent',
                paddingBottom: 3, transition: 'all .2s',
              }}>{l.label}</a>
            ))}
          </nav>
          {/* burger (mobile) */}
          <button className="hdr-burger" onClick={() => setMobOpen(true)} style={{
            display: 'none', background: 'none', border: 'none', color: 'var(--brown-800)' }}>
            <Icon name="menu" size={26} />
          </button>
          {/* logo */}
          <a onClick={() => nav('home')} style={{ cursor: 'pointer', textAlign: 'center', lineHeight: 1 }}>
            <div className="display" style={{ fontSize: 27, fontStyle: 'italic', fontWeight: 600, color: 'var(--brown-900)' }}>Maison Mélisse</div>
            <div className="ui" style={{ fontSize: 9.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--amber)', marginTop: 2 }}>Miels &amp; récoltes · Vercors</div>
          </a>
          {/* right actions */}
          <div style={{ display: 'flex', gap: 6, flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <button onClick={() => nav('account')} title="Mon compte" style={iconBtn(route === 'account')}><Icon name="user" size={21} /></button>
            <button onClick={onCart} title="Mon panier" style={{ ...iconBtn(false), position: 'relative' }}>
              <Icon name="cart" size={21} />
              {cartCount > 0 && <span style={cartBadge}>{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      {mobOpen && (
        <div onClick={() => setMobOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(36,20,7,0.5)', animation: 'fadeIn .2s' }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 280, background: 'var(--paper)', padding: 26, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <span className="display" style={{ fontStyle: 'italic', fontSize: 22 }}>Maison Mélisse</span>
              <button onClick={() => setMobOpen(false)} style={{ background: 'none', border: 'none' }}><Icon name="close" size={24} /></button>
            </div>
            {links.concat([{ id: 'account', label: "Mon compte" }]).map(l => (
              <a key={l.id} onClick={() => { nav(l.id); setMobOpen(false); }} style={{
                fontFamily: 'var(--ui)', fontSize: 17, padding: '12px 0', borderBottom: '1px solid var(--line)', cursor: 'pointer',
                color: route === l.id ? 'var(--amber)' : 'var(--brown-800)' }}>{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
function iconBtn(active) {
  return { background: 'none', border: 'none', color: active ? 'var(--amber)' : 'var(--brown-800)',
    width: 42, height: 42, borderRadius: '50%', display: 'grid', placeItems: 'center', transition: 'background .2s' };
}
const cartBadge = { position: 'absolute', top: 4, right: 2, minWidth: 18, height: 18, padding: '0 5px',
  background: 'var(--honey)', color: 'var(--brown-900)', borderRadius: 99, fontFamily: 'var(--ui)', fontWeight: 700,
  fontSize: 11, display: 'grid', placeItems: 'center', border: '2px solid var(--paper)' };

/* ============================================================
   Réassurance (bandeau)
   ============================================================ */
function ReassuranceRow({ compact }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: compact ? 14 : 24 }}>
      {REASSURANCE.map((r, i) => (
        <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <span style={{ flex: 'none', width: 46, height: 46, borderRadius: '50%', background: 'var(--cream)', color: 'var(--amber)', display: 'grid', placeItems: 'center', border: '1px solid var(--line)' }}>
            <Icon name={r.icon} size={22} />
          </span>
          <div>
            <div className="ui" style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--brown-800)', marginBottom: 2 }}>{r.title}</div>
            <div style={{ fontSize: 13.5, color: 'var(--ink-soft)', lineHeight: 1.45 }}>{r.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   Footer
   ============================================================ */
function Footer({ nav }) {
  return (
    <footer style={{ background: 'var(--brown-900)', color: 'var(--cream)', marginTop: 0 }}>
      <div className="wrap" style={{ padding: '64px 28px 30px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(240px, 1.4fr) repeat(3, 1fr)', gap: 40 }} className="footer-grid">
          <div>
            <div className="display" style={{ fontSize: 30, fontStyle: 'italic', marginBottom: 12 }}>Maison Mélisse</div>
            <p style={{ fontSize: 14.5, color: 'rgba(244,234,211,0.72)', lineHeight: 1.6, maxWidth: 320 }}>
              Miels monofloraux et produits de la ruche, récoltés à la main en lisière du Vercors. Mis en pot à la ferme, sans chauffage ni mélange.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              {['instagram', 'facebook', 'mail'].map(s => (
                <a key={s} style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid rgba(244,234,211,0.25)', display: 'grid', placeItems: 'center', color: 'var(--cream)', cursor: 'pointer' }}><Icon name={s} size={19} /></a>
              ))}
            </div>
          </div>
          {[
            { t: "La boutique", items: [["Tous les miels", () => nav('shop')], ["Produits de la ruche", () => nav('shop')], ["Coffrets cadeaux", () => nav('shop')], ["Mon compte", () => nav('account')]] },
            { t: "La maison", items: [["Notre histoire", () => nav('story')], ["L'apicultrice", () => nav('story')], ["Nous écrire", () => nav('contact')], ["FAQ", () => nav('contact')]] },
            { t: "Infos", items: [["Livraison & retours", () => nav('contact')], ["Conservation du miel", () => nav('contact')], ["CGV", () => {}], ["Mentions légales", () => {}]] },
          ].map((col, i) => (
            <div key={i}>
              <div className="ui" style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--honey-soft)', marginBottom: 16 }}>{col.t}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {col.items.map(([label, fn], j) => (
                  <a key={j} onClick={fn} style={{ fontFamily: 'var(--ui)', fontSize: 14, color: 'rgba(244,234,211,0.78)', cursor: 'pointer' }}>{label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, paddingTop: 22, borderTop: '1px solid rgba(244,234,211,0.16)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span className="ui" style={{ fontSize: 13, color: 'rgba(244,234,211,0.55)' }}>© 2026 Maison Mélisse — EARL du Grand Tilleul, Vercors. Récolté avec soin.</span>
          <span className="ui" style={{ fontSize: 13, color: 'rgba(244,234,211,0.55)', display: 'inline-flex', alignItems: 'center', gap: 7 }}><Icon name="lock" size={14} /> Paiement sécurisé · Apiculteur récoltant</span>
        </div>
      </div>
    </footer>
  );
}

/* Section heading helper */
function SectionHead({ eyebrow, title, sub, align = 'center', max = 560 }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? max : 'none', margin: align === 'center' ? '0 auto' : 0 }}>
      {eyebrow && <div className="eyebrow" style={{ marginBottom: 14 }}>{eyebrow}</div>}
      <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 46px)', fontStyle: 'italic', fontWeight: 500, margin: 0, color: 'var(--brown-900)' }}>{title}</h2>
      {sub && <p style={{ marginTop: 14, fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.6 }}>{sub}</p>}
    </div>
  );
}

Object.assign(window, {
  Icon, Stars, Btn, HoneyJar, ProductImage, ProductCard,
  Header, Footer, ReassuranceRow, SectionHead,
});
