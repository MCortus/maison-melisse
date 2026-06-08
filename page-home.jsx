/* ============================================================
   Maison Mélisse — Page Accueil
   ============================================================ */

function Hero({ nav, addToCart }) {
  const star = PRODUCT_BY_ID['lavande'];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--brown-900)' }}>
      {/* textured honey background */}
      <div className="hexbg" style={{
        position: 'absolute', inset: 0,
        backgroundColor: '#3a2412',
        backgroundImage:
          `radial-gradient(80% 70% at 78% 12%, rgba(217,154,43,0.55), transparent 55%),` +
          `radial-gradient(70% 90% at 12% 90%, rgba(168,99,28,0.55), transparent 60%),` +
          `linear-gradient(160deg, #4a2e16, #241407)`,
      }} />
      <div className="wrap" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 40, alignItems: 'center', minHeight: 'min(86vh, 760px)', padding: '70px 28px 110px' }}>
        {/* copy */}
        <div style={{ animation: 'floatUp .8s ease both' }}>
          <div className="script" style={{ fontSize: 38, color: 'var(--honey-soft)', lineHeight: 1, marginBottom: 6 }}>récolté à la main,</div>
          <h1 className="display" style={{ fontSize: 'clamp(44px, 5.8vw, 82px)', color: 'var(--paper)', fontStyle: 'italic', fontWeight: 500, lineHeight: 1.04, margin: '0 0 26px' }}>
            l'or de nos<br/>ruches du Vercors.
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(244,234,211,0.84)', lineHeight: 1.65, maxWidth: 480, margin: '0 0 32px' }}>
            Des miels monofloraux extraits à froid et mis en pot à la ferme, jamais chauffés ni mélangés. Du cadre au pot, c'est nous — et c'est tout.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Btn variant="honey" size="lg" onClick={() => nav('shop')}>Découvrir la boutique <Icon name="arrow" size={18} /></Btn>
            <Btn variant="outline" size="lg" onClick={() => nav('story')} style={{ color: 'var(--paper)', borderColor: 'rgba(244,234,211,0.5)' }}>Rencontrer l'apicultrice</Btn>
          </div>
          <div style={{ display: 'flex', gap: 26, marginTop: 40, flexWrap: 'wrap' }}>
            {[["120", "ruches"], ["9", "miels & récoltes"], ["100 %", "fait à la ferme"]].map(([n, l]) => (
              <div key={l}>
                <div className="display" style={{ fontSize: 34, color: 'var(--honey-soft)', fontWeight: 600, lineHeight: 1 }}>{n}</div>
                <div className="ui" style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(244,234,211,0.6)', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* product showcase */}
        <div style={{ position: 'relative', display: 'grid', placeItems: 'center', animation: 'floatUp 1s .15s ease both' }}>
          <div style={{ position: 'absolute', width: 'min(72%, 320px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,192,99,0.45), transparent 70%)', filter: 'blur(8px)' }} />
          <div style={{ position: 'relative', transform: 'scale(1.45)' }}>
            <HoneyJar p={star} w={210} />
          </div>
          <div style={{ position: 'absolute', top: '6%', right: '2%', background: 'var(--paper)', borderRadius: '50%', width: 104, height: 104, display: 'grid', placeItems: 'center', textAlign: 'center', boxShadow: 'var(--shadow-md)', animation: 'spinSlow 26s linear infinite' }}>
            <div>
              <div className="display" style={{ fontSize: 19, fontStyle: 'italic', fontWeight: 600, color: 'var(--brown-800)', lineHeight: 1 }}>Récolte<br/>2026</div>
              <div className="ui" style={{ fontSize: 8.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--amber)', marginTop: 5 }}>Édition limitée</div>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: '4%', left: '0%', background: 'rgba(36,20,7,0.6)', backdropFilter: 'blur(6px)', borderRadius: 'var(--r-md)', padding: '12px 16px', border: '1px solid rgba(244,234,211,0.18)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Stars value={5} size={13} />
              <span className="ui" style={{ fontSize: 12, color: 'var(--cream)' }}>4,9/5 · 1 200+ avis</span>
            </div>
          </div>
        </div>
      </div>
      {/* wavy bottom */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: 70, display: 'block' }}>
        <path d="M0 40 C 240 80, 480 10, 720 32 C 960 54, 1200 86, 1440 36 L1440 80 L0 80 Z" fill="var(--paper)"/>
      </svg>
    </section>
  );
}

function MarqueeStrip() {
  const items = ["Extraction à froid", "Mise en pot à la ferme", "Ruches du Vercors", "Sans chauffage", "Apiculteur récoltant", "Livraison offerte dès 49 €"];
  const row = [...items, ...items];
  return (
    <div style={{ background: 'var(--brown-800)', overflow: 'hidden', padding: '14px 0' }}>
      <div style={{ display: 'flex', gap: 0, whiteSpace: 'nowrap', animation: 'scrollx 28s linear infinite', width: 'max-content' }}>
        {row.map((t, i) => (
          <span key={i} className="ui" style={{ display: 'inline-flex', alignItems: 'center', gap: 36, paddingRight: 36, color: 'var(--honey-soft)', fontSize: 14, letterSpacing: '0.08em' }}>
            {t} <span style={{ color: 'var(--amber)' }}>✺</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scrollx { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

function BestSellers({ nav, openProduct, addToCart }) {
  const picks = ['lavande', 'chataignier', 'acacia', 'coffret-decouverte'].map(id => PRODUCT_BY_ID[id]);
  return (
    <section style={{ background: 'var(--paper)', padding: '84px 0 90px' }}>
      <div className="wrap">
        <SectionHead eyebrow="Les chouchous" title="Ce qu'on déguste le plus" sub="Les pots qui repartent le plus vite de la ferme. Goûtés et approuvés, saison après saison." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 26, marginTop: 50 }}>
          {picks.map(p => <ProductCard key={p.id} p={p} onOpen={openProduct} onAdd={addToCart} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: 46 }}>
          <Btn variant="outline" size="lg" onClick={() => nav('shop')}>Voir tout le rucher <Icon name="arrow" size={18} /></Btn>
        </div>
      </div>
    </section>
  );
}

function StoryTeaser({ nav }) {
  return (
    <section style={{ background: 'var(--cream)', padding: '90px 0' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} >
        <div style={{ position: 'relative' }}>
          <div className="hexbg" style={{
            aspectRatio: '4/5', borderRadius: 'var(--r-lg)',
            backgroundColor: '#6b4a24',
            backgroundImage: `radial-gradient(70% 60% at 30% 20%, rgba(232,192,99,0.5), transparent 60%), linear-gradient(160deg, #7a5828, #3e2a16)`,
            display: 'grid', placeItems: 'center', boxShadow: 'var(--shadow-md)',
          }}>
            <div style={{ textAlign: 'center', color: 'var(--paper)', padding: 30 }}>
              <Icon name="bee" size={70} style={{ opacity: 0.85 }} />
              <div className="display" style={{ fontStyle: 'italic', fontSize: 26, marginTop: 14, opacity: 0.9 }}>Camille, au rucher</div>
              <div className="ui" style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, marginTop: 8 }}>Photo — visite du rucher</div>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: -26, right: -16, background: 'var(--paper-card)', borderRadius: 'var(--r-md)', padding: '18px 22px', boxShadow: 'var(--shadow-md)', maxWidth: 210, border: '1px solid var(--line)' }}>
            <div className="script" style={{ fontSize: 26, color: 'var(--amber)', lineHeight: 1 }}>« Le miel,</div>
            <div style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.45, marginTop: 4 }}>ça ne se fabrique pas. Ça se mérite, ruche après ruche. »</div>
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Notre histoire</div>
          <h2 className="display" style={{ fontSize: 'clamp(34px, 4.4vw, 52px)', fontStyle: 'italic', fontWeight: 500, lineHeight: 1.05, margin: '0 0 22px', color: 'var(--brown-900)' }}>
            Une apicultrice,<br/>une vallée, des abeilles.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: 18 }}>
            En 2011, Camille a installé sa première ruche en lisière du Vercors. Quinze ans plus tard, ses 120 colonies butinent les acacias, les châtaigniers et la lavande des plateaux — et nous, on continue de tout faire à la main.
          </p>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: 30 }}>
            Pas d'intermédiaire, pas de mélange, pas de chauffage. Juste un miel vivant, qui change avec les saisons et qui raconte d'où il vient.
          </p>
          <Btn variant="solid" size="lg" onClick={() => nav('story')}>Lire notre histoire <Icon name="arrow" size={18} /></Btn>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { n: "01", t: "On élève", d: "Des ruches en bois, posées loin des grandes cultures. On soigne les colonies sans chimie et on les laisse tranquilles." },
    { n: "02", t: "On récolte", d: "À maturité seulement, quand les abeilles ont operculé les cadres. Extraction à froid, jamais au-dessus de 25 °C." },
    { n: "03", t: "On laisse reposer", d: "Le miel décante quelques jours dans des maturateurs inox. Aucun filtrage agressif, on garde le pollen." },
    { n: "04", t: "On met en pot", d: "À la main, par petites séries, dans notre fournil. Étiqueté, daté, prêt à partir chez vous." },
  ];
  return (
    <section style={{ background: 'var(--brown-900)', color: 'var(--cream)', padding: '90px 0' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 56px' }}>
          <div className="eyebrow" style={{ color: 'var(--honey-soft)', marginBottom: 14 }}>Du cadre au pot</div>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontStyle: 'italic', fontWeight: 500, margin: 0, color: 'var(--paper)' }}>Comment naît un pot de miel</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 28 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ borderTop: '2px solid rgba(232,192,99,0.4)', paddingTop: 22 }}>
              <div className="display" style={{ fontSize: 46, color: 'var(--honey)', fontStyle: 'italic', lineHeight: 1, marginBottom: 14 }}>{s.n}</div>
              <h3 className="display" style={{ fontSize: 26, fontWeight: 600, margin: '0 0 8px', color: 'var(--paper)' }}>{s.t}</h3>
              <p style={{ fontSize: 14.5, color: 'rgba(244,234,211,0.7)', lineHeight: 1.6, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section style={{ background: 'var(--paper)', padding: '84px 0' }}>
      <div className="wrap">
        <SectionHead eyebrow="On en parle bien" title="Des palais conquis" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 48 }}>
          {REVIEWS.map((r, i) => (
            <figure key={i} style={{ margin: 0, background: 'var(--paper-card)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: '28px 28px 24px', boxShadow: 'var(--shadow-sm)' }}>
              <Stars value={r.stars} size={16} />
              <blockquote style={{ margin: '16px 0 20px', fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 21, lineHeight: 1.45, color: 'var(--brown-800)' }}>« {r.text} »</blockquote>
              <figcaption style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span className="ui" style={{ fontWeight: 700, fontSize: 14, color: 'var(--brown-800)' }}>{r.name} <span style={{ fontWeight: 400, color: 'var(--ink-faint)' }}>· {r.place}</span></span>
                <span className="ui" style={{ fontSize: 12, color: 'var(--amber)' }}>{r.product}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [sent, setSent] = useState(false);
  return (
    <section style={{ background: 'var(--cream)', padding: '80px 0' }}>
      <div className="wrap-narrow" style={{ textAlign: 'center' }}>
        <Icon name="mail" size={40} style={{ color: 'var(--amber)' }} />
        <h2 className="display" style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontStyle: 'italic', fontWeight: 500, margin: '14px 0 12px', color: 'var(--brown-900)' }}>La lettre du rucher</h2>
        <p style={{ fontSize: 16.5, color: 'var(--ink-soft)', maxWidth: 480, margin: '0 auto 26px', lineHeight: 1.6 }}>
          Les nouvelles récoltes, les dates de visite à la ferme et quelques recettes de saison. Une lettre par mois, jamais plus.
        </p>
        {sent ? (
          <div className="ui" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--sage-pale)', color: 'var(--sage-deep)', padding: '14px 26px', borderRadius: 'var(--r-pill)', fontWeight: 600 }}>
            <Icon name="check" size={18} /> Merci ! On vous écrit très vite.
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', gap: 10, maxWidth: 460, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input required type="email" placeholder="votre@email.fr" style={{
              flex: '1 1 240px', padding: '14px 20px', borderRadius: 'var(--r-pill)', border: '1.5px solid var(--line)',
              fontFamily: 'var(--ui)', fontSize: 15, background: 'var(--paper-card)', color: 'var(--brown-800)', outline: 'none' }} />
            <Btn variant="honey" size="lg" type="submit">Je m'abonne</Btn>
          </form>
        )}
      </div>
    </section>
  );
}

function HomePage({ nav, openProduct, addToCart }) {
  return (
    <div>
      <Hero nav={nav} addToCart={addToCart} />
      <MarqueeStrip />
      <BestSellers nav={nav} openProduct={openProduct} addToCart={addToCart} />
      <StoryTeaser nav={nav} />
      <ProcessSection />
      {/* reassurance band */}
      <section style={{ background: 'var(--paper)', padding: '70px 0' }}>
        <div className="wrap"><ReassuranceRow /></div>
      </section>
      <ReviewsSection />
      <Newsletter />
    </div>
  );
}

Object.assign(window, { HomePage });
