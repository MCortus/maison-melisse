/* ============================================================
   Maison Mélisse — Notre histoire · Contact/FAQ · Compte client
   ============================================================ */

/* ---------------- Notre histoire ---------------- */
function StoryPage({ nav }) {
  return (
    <div style={{ background: 'var(--paper)' }}>
      {/* hero */}
      <section className="hexbg" style={{ position: 'relative', color: 'var(--cream)', overflow: 'hidden',
        backgroundColor: '#3a2412',
        backgroundImage: `radial-gradient(70% 80% at 80% 10%, rgba(217,154,43,0.5), transparent 55%), linear-gradient(160deg, #4a2e16, #241407)` }}>
        <div className="wrap" style={{ padding: '80px 28px 90px', maxWidth: 820, textAlign: 'center' }}>
          <div className="script" style={{ fontSize: 36, color: 'var(--honey-soft)' }}>depuis 2011,</div>
          <h1 className="display" style={{ fontSize: 'clamp(40px, 5.4vw, 70px)', fontStyle: 'italic', fontWeight: 500, lineHeight: 1.06, margin: '6px 0 28px', color: 'var(--paper)' }}>
            La patience d'une apicultrice du Vercors
          </h1>
          <p style={{ fontSize: 19, color: 'rgba(244,234,211,0.82)', lineHeight: 1.65, maxWidth: 600, margin: '0 auto' }}>
            Maison Mélisse, ce n'est pas une marque imaginée dans un bureau. C'est une ferme, des ruches, et l'obstination de bien faire les choses.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: 50 }}>
          <path d="M0 30 C 360 60, 720 0, 1080 24 C 1260 36, 1380 40, 1440 28 L1440 60 L0 60 Z" fill="var(--paper)"/>
        </svg>
      </section>

      {/* intro split */}
      <section className="wrap" style={{ padding: '80px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div className="hexbg" style={{ aspectRatio: '4/5', borderRadius: 'var(--r-lg)', backgroundColor: '#6b4a24',
          backgroundImage: `radial-gradient(70% 60% at 30% 20%, rgba(232,192,99,0.45), transparent 60%), linear-gradient(160deg, #7a5828, #3e2a16)`,
          display: 'grid', placeItems: 'center', boxShadow: 'var(--shadow-md)', color: 'var(--paper)' }}>
          <div style={{ textAlign: 'center', padding: 30 }}>
            <Icon name="bee" size={64} style={{ opacity: 0.85 }} />
            <div className="display" style={{ fontStyle: 'italic', fontSize: 24, marginTop: 12, opacity: 0.9 }}>Camille Aubert</div>
            <div className="ui" style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, marginTop: 6 }}>Fondatrice &amp; apicultrice</div>
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>La rencontre</div>
          <h2 className="display" style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontStyle: 'italic', fontWeight: 500, lineHeight: 1.08, margin: '0 0 22px', color: 'var(--brown-900)' }}>
            Tout a commencé par<br/>une seule ruche.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: 18 }}>
            En 2011, Camille quitte la ville et s'installe dans une ferme en lisière du Vercors. Une ruche au fond du jardin, par curiosité. Un essaim, puis deux, puis dix. Très vite, l'évidence&nbsp;: ce sera son métier.
          </p>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.75 }}>
            Quinze ans plus tard, Maison Mélisse compte 120 ruches réparties entre la vallée, les châtaigneraies et les plateaux de lavande. Mais la philosophie n'a pas bougé d'un pouce&nbsp;: peu de ruches, beaucoup d'attention.
          </p>
        </div>
      </section>

      {/* values band */}
      <section style={{ background: 'var(--cream)', padding: '80px 0' }}>
        <div className="wrap">
          <SectionHead eyebrow="Nos engagements" title="Trois promesses qu'on tient" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 26, marginTop: 50 }}>
            {[
              { ic: 'bee', t: "Les abeilles d'abord", d: "On ne récolte jamais tout. Chaque colonie garde assez de miel pour passer l'hiver sans sirop industriel. Pas de surexploitation, pas de transhumance à outrance." },
              { ic: 'hand', t: "Le geste, pas la machine", d: "Extraction à froid, décantation lente, mise en pot à la main. On préfère faire moins, mais bien. Un miel vivant qui garde son pollen et ses arômes." },
              { ic: 'leaf', t: "Le respect du terroir", d: "Nos ruches butinent à moins de 30 km de la ferme, loin des grandes cultures traitées. Chaque pot raconte un coin précis du Vercors et une floraison." },
            ].map((v, i) => (
              <div key={i} style={{ background: 'var(--paper-card)', borderRadius: 'var(--r-lg)', padding: '30px 28px', border: '1px solid var(--line)', boxShadow: 'var(--shadow-sm)' }}>
                <span style={{ width: 54, height: 54, borderRadius: '50%', background: 'var(--cream)', color: 'var(--amber)', display: 'grid', placeItems: 'center', border: '1px solid var(--line)' }}><Icon name={v.ic} size={26} /></span>
                <h3 className="display" style={{ fontSize: 27, fontWeight: 600, margin: '18px 0 10px', color: 'var(--brown-900)' }}>{v.t}</h3>
                <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="wrap" style={{ padding: '80px 28px' }}>
        <SectionHead eyebrow="Le chemin parcouru" title="Quinze ans, saison après saison" />
        <div style={{ maxWidth: 720, margin: '50px auto 0' }}>
          {[
            ["2011", "La première ruche", "Camille installe une ruche au fond du jardin de la ferme familiale. La passion prend."],
            ["2014", "Le grand saut", "Installation officielle en tant qu'apicultrice récoltante. 25 ruches, premiers marchés de producteurs."],
            ["2018", "La lavande", "Première transhumance vers le plateau de Sault. Le miel de lavande devient notre signature."],
            ["2021", "Le fournil", "Construction du laboratoire à la ferme. Mise en pot et pain d'épices désormais 100 % maison."],
            ["2026", "Vous, ici", "120 ruches, neuf récoltes, et une boutique en ligne pour vous envoyer notre miel, où que vous soyez."],
          ].map(([year, t, d], i, arr) => (
            <div key={i} style={{ display: 'flex', gap: 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ width: 16, height: 16, borderRadius: '50%', background: 'var(--honey)', border: '3px solid var(--paper)', boxShadow: '0 0 0 1.5px var(--honey-deep)', flex: 'none', marginTop: 6 }} />
                {i < arr.length - 1 && <span style={{ width: 2, flex: 1, background: 'var(--line)', margin: '6px 0' }} />}
              </div>
              <div style={{ paddingBottom: 34 }}>
                <span className="display" style={{ fontSize: 30, fontStyle: 'italic', color: 'var(--amber)', fontWeight: 600 }}>{year}</span>
                <h3 className="display" style={{ fontSize: 25, fontWeight: 600, margin: '2px 0 6px', color: 'var(--brown-900)' }}>{t}</h3>
                <p style={{ fontSize: 15.5, color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0 }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* stats + CTA */}
      <section style={{ background: 'var(--brown-900)', color: 'var(--cream)', padding: '70px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 30, textAlign: 'center', marginBottom: 50 }}>
            {STORY_STATS.map((s, i) => (
              <div key={i}>
                <div className="display" style={{ fontSize: 'clamp(40px, 6vw, 62px)', fontStyle: 'italic', color: 'var(--honey-soft)', fontWeight: 600, lineHeight: 1 }}>{s.n}</div>
                <div className="ui" style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,234,211,0.6)', marginTop: 8 }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Btn variant="honey" size="lg" onClick={() => nav('shop')}>Goûter le travail de Camille <Icon name="arrow" size={18} /></Btn>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- Contact + FAQ ---------------- */
function ContactPage() {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(0);
  return (
    <div style={{ background: 'var(--paper)' }}>
      <div style={{ background: 'var(--cream)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap" style={{ padding: '52px 28px 44px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>On vous répond</div>
          <h1 className="display" style={{ fontSize: 'clamp(38px, 5vw, 58px)', fontStyle: 'italic', fontWeight: 500, margin: 0, color: 'var(--brown-900)' }}>Écrivez-nous, on adore ça</h1>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', maxWidth: 540, margin: '14px auto 0' }}>
            Une question sur un miel, une commande, une visite du rucher&nbsp;? C'est Camille ou Léa qui vous répond, en vrai.
          </p>
        </div>
      </div>

      <div className="wrap" style={{ padding: '60px 28px 40px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 50, alignItems: 'start' }} >
        {/* contact info */}
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {[
              ['pin', "La ferme", "EARL du Grand Tilleul\nRoute des Ruchers, 26420 Vercors"],
              ['mail', "E-mail", "bonjour@maison-melisse.fr\nRéponse sous 24 h ouvrées"],
              ['phone', "Téléphone", "04 75 00 00 00\nDu mardi au samedi, 9 h – 18 h"],
            ].map(([ic, t, v]) => (
              <div key={t} style={{ display: 'flex', gap: 16 }}>
                <span style={{ width: 48, height: 48, flex: 'none', borderRadius: '50%', background: 'var(--cream)', color: 'var(--amber)', display: 'grid', placeItems: 'center', border: '1px solid var(--line)' }}><Icon name={ic} size={22} /></span>
                <div>
                  <div className="ui" style={{ fontWeight: 700, fontSize: 15, color: 'var(--brown-800)', marginBottom: 3 }}>{t}</div>
                  <div style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{v}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
            {['instagram', 'facebook'].map(s => (
              <a key={s} style={{ width: 46, height: 46, borderRadius: '50%', border: '1.5px solid var(--line)', display: 'grid', placeItems: 'center', color: 'var(--brown-700)', cursor: 'pointer', background: 'var(--paper-card)' }}><Icon name={s} size={20} /></a>
            ))}
            <span className="ui" style={{ alignSelf: 'center', fontSize: 13.5, color: 'var(--ink-soft)' }}>@maison.melisse · 18,4k abonnés</span>
          </div>
          <div className="hexbg" style={{ marginTop: 28, aspectRatio: '16/10', borderRadius: 'var(--r-lg)', backgroundColor: '#6b7a4f',
            backgroundImage: `linear-gradient(160deg, #7c8a52, #54603a)`, display: 'grid', placeItems: 'center', color: 'var(--paper)' }}>
            <div style={{ textAlign: 'center' }}><Icon name="pin" size={34} /><div className="ui" style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 8, opacity: 0.85 }}>Carte — Vercors, Drôme</div></div>
          </div>
        </div>

        {/* form */}
        <div style={{ background: 'var(--paper-card)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 32, boxShadow: 'var(--shadow-sm)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--sage-pale)', color: 'var(--sage-deep)', display: 'grid', placeItems: 'center', margin: '0 auto 18px' }}><Icon name="check" size={36} /></div>
              <h3 className="display" style={{ fontStyle: 'italic', fontSize: 28, margin: '0 0 8px' }}>Message bien reçu&nbsp;!</h3>
              <p style={{ color: 'var(--ink-soft)' }}>On vous répond sous 24 heures ouvrées.</p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
              <h3 className="display" style={{ fontStyle: 'italic', fontSize: 28, margin: '0 0 20px', color: 'var(--brown-900)' }}>Un petit mot&nbsp;?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <Field label="Prénom" value="" onChange={() => {}} placeholder="Camille" />
                <Field label="E-mail" value="" onChange={() => {}} type="email" placeholder="vous@email.fr" />
              </div>
              <Field label="Sujet" value="" onChange={() => {}} full placeholder="Une question sur…" />
              <label style={{ display: 'block', marginBottom: 18 }}>
                <span className="ui" style={{ display: 'block', fontSize: 13, color: 'var(--ink-soft)', marginBottom: 6, fontWeight: 500 }}>Votre message</span>
                <textarea rows={5} placeholder="Dites-nous tout…" style={{ width: '100%', padding: '13px 16px', borderRadius: 'var(--r-md)', border: '1.5px solid var(--line)', fontFamily: 'var(--ui)', fontSize: 15, background: 'var(--paper)', color: 'var(--brown-800)', outline: 'none', resize: 'vertical' }} />
              </label>
              <Btn variant="honey" size="lg" full type="submit">Envoyer le message <Icon name="arrow" size={18} /></Btn>
            </form>
          )}
        </div>
      </div>

      {/* FAQ */}
      <section style={{ background: 'var(--cream)', padding: '72px 0', marginTop: 40 }}>
        <div className="wrap-narrow">
          <SectionHead eyebrow="Questions fréquentes" title="On vous explique tout" />
          <div style={{ marginTop: 40 }}>
            {FAQ.map((f, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 18, background: 'none', border: 'none', padding: '22px 4px', cursor: 'pointer', textAlign: 'left' }}>
                  <span className="display" style={{ fontSize: 22, fontWeight: 600, color: 'var(--brown-900)' }}>{f.q}</span>
                  <span style={{ flex: 'none', color: 'var(--amber)', transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform .25s' }}><Icon name="plus" size={22} /></span>
                </button>
                <div style={{ maxHeight: open === i ? 300 : 0, overflow: 'hidden', transition: 'max-height .35s ease' }}>
                  <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 4px 24px' }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- Compte client ---------------- */
function AccountPage({ nav, openProduct }) {
  const [tab, setTab] = useState('orders');
  const user = { name: "Hélène Mercier", email: "helene.mercier@email.fr", since: "mai 2024", points: 240 };
  return (
    <div style={{ background: 'var(--paper)', minHeight: '70vh' }}>
      <div style={{ background: 'var(--cream)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap" style={{ padding: '44px 28px 40px', display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--brown-800)', color: 'var(--honey-soft)', display: 'grid', placeItems: 'center', fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 30, fontWeight: 600 }}>HM</div>
          <div style={{ flex: 1 }}>
            <div className="script" style={{ fontSize: 26, color: 'var(--amber)', lineHeight: 1 }}>bonjour Hélène,</div>
            <h1 className="display" style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontStyle: 'italic', fontWeight: 500, margin: '2px 0 0', color: 'var(--brown-900)' }}>Votre espace au rucher</h1>
          </div>
          <div style={{ background: 'var(--paper-card)', border: '1px solid var(--line)', borderRadius: 'var(--r-md)', padding: '14px 22px', textAlign: 'center' }}>
            <div className="display" style={{ fontSize: 30, fontWeight: 600, color: 'var(--amber)', lineHeight: 1 }}>{user.points}</div>
            <div className="ui" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginTop: 4 }}>points fidélité</div>
          </div>
        </div>
      </div>

      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 40, padding: '36px 28px 80px', alignItems: 'start' }}>
        {/* side nav */}
        <aside className="shop-aside" style={{ position: 'sticky', top: 92, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[['orders', 'Mes commandes', 'cart'], ['profile', 'Mes informations', 'user'], ['address', 'Mes adresses', 'pin'], ['fidelity', 'Fidélité', 'heart']].map(([k, l, ic]) => (
            <button key={k} onClick={() => setTab(k)} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 'var(--r-md)', cursor: 'pointer', textAlign: 'left',
              border: 'none', fontFamily: 'var(--ui)', fontSize: 14.5, fontWeight: tab === k ? 700 : 500,
              background: tab === k ? 'var(--cream)' : 'transparent', color: tab === k ? 'var(--brown-900)' : 'var(--ink-soft)' }}>
              <Icon name={ic} size={19} style={{ color: tab === k ? 'var(--amber)' : 'var(--ink-faint)' }} /> {l}
            </button>
          ))}
          <button onClick={() => nav('home')} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 'var(--r-md)', cursor: 'pointer', textAlign: 'left', border: 'none', fontFamily: 'var(--ui)', fontSize: 14.5, background: 'transparent', color: 'var(--ink-faint)', marginTop: 8 }}>
            <Icon name="arrow-left" size={19} /> Déconnexion
          </button>
        </aside>

        {/* content */}
        <div>
          {tab === 'orders' && (
            <div>
              <h2 className="display" style={{ fontSize: 30, fontStyle: 'italic', fontWeight: 500, margin: '0 0 6px' }}>Mes commandes</h2>
              <p className="ui" style={{ color: 'var(--ink-soft)', fontSize: 14, marginBottom: 24 }}>{ORDER_HISTORY.length} commandes passées depuis {user.since}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {ORDER_HISTORY.map(o => <OrderCard key={o.id} o={o} openProduct={openProduct} />)}
              </div>
            </div>
          )}
          {tab === 'profile' && (
            <div>
              <h2 className="display" style={{ fontSize: 30, fontStyle: 'italic', fontWeight: 500, margin: '0 0 24px' }}>Mes informations</h2>
              <div style={{ background: 'var(--paper-card)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 28, maxWidth: 540 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <Field label="Prénom" value="Hélène" onChange={() => {}} />
                  <Field label="Nom" value="Mercier" onChange={() => {}} />
                </div>
                <Field label="E-mail" value={user.email} onChange={() => {}} full />
                <Field label="Téléphone" value="06 12 34 56 78" onChange={() => {}} full />
                <Btn variant="solid" size="md" style={{ marginTop: 8 }}>Enregistrer</Btn>
              </div>
            </div>
          )}
          {tab === 'address' && (
            <div>
              <h2 className="display" style={{ fontSize: 30, fontStyle: 'italic', fontWeight: 500, margin: '0 0 24px' }}>Mes adresses</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 18 }}>
                <div style={{ background: 'var(--paper-card)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 24 }}>
                  <div className="ui" style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'var(--cream)', color: 'var(--amber)', padding: '4px 10px', borderRadius: 99, marginBottom: 14 }}>Par défaut</div>
                  <div className="ui" style={{ fontWeight: 700, color: 'var(--brown-800)', marginBottom: 6 }}>Hélène Mercier</div>
                  <div style={{ fontSize: 14.5, color: 'var(--ink-soft)', lineHeight: 1.6 }}>14 rue des Lilas<br/>69003 Lyon<br/>France</div>
                </div>
                <button style={{ border: '1.5px dashed var(--line)', borderRadius: 'var(--r-lg)', background: 'none', color: 'var(--ink-soft)', display: 'grid', placeItems: 'center', minHeight: 150, cursor: 'pointer', fontFamily: 'var(--ui)', fontSize: 14.5, gap: 8 }}>
                  <Icon name="plus" size={26} /> Ajouter une adresse
                </button>
              </div>
            </div>
          )}
          {tab === 'fidelity' && (
            <div>
              <h2 className="display" style={{ fontSize: 30, fontStyle: 'italic', fontWeight: 500, margin: '0 0 24px' }}>Programme fidélité</h2>
              <div style={{ background: 'var(--brown-900)', color: 'var(--cream)', borderRadius: 'var(--r-lg)', padding: 32 }}>
                <div className="script" style={{ fontSize: 28, color: 'var(--honey-soft)' }}>la ruche vous remercie</div>
                <div className="display" style={{ fontSize: 56, fontStyle: 'italic', fontWeight: 600, color: 'var(--paper)', lineHeight: 1, margin: '6px 0 4px' }}>{user.points} pts</div>
                <p style={{ color: 'rgba(244,234,211,0.75)', fontSize: 15, lineHeight: 1.6, maxWidth: 440 }}>Plus que 60 points pour débloquer un pot de miel d'acacia offert. Chaque euro dépensé = 1 point.</p>
                <div style={{ height: 9, borderRadius: 99, background: 'rgba(244,234,211,0.2)', overflow: 'hidden', margin: '18px 0 8px', maxWidth: 440 }}>
                  <div style={{ height: '100%', width: '80%', background: 'linear-gradient(90deg, var(--honey-soft), var(--honey))' }} />
                </div>
                <div className="ui" style={{ fontSize: 12, color: 'rgba(244,234,211,0.6)' }}>240 / 300 points</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function OrderCard({ o, openProduct }) {
  const [open, setOpen] = useState(false);
  const statusColor = o.statusKey === 'delivered' ? 'var(--sage-deep)' : 'var(--amber)';
  const statusBg = o.statusKey === 'delivered' ? 'var(--sage-pale)' : 'var(--honey-pale)';
  return (
    <div style={{ background: 'var(--paper-card)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '20px 24px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 160 }}>
          <div className="ui" style={{ fontWeight: 700, fontSize: 15, color: 'var(--brown-800)' }}>{o.id}</div>
          <div className="ui" style={{ fontSize: 13, color: 'var(--ink-faint)' }}>Passée le {o.date}</div>
        </div>
        <span className="ui" style={{ fontSize: 12.5, fontWeight: 700, color: statusColor, background: statusBg, padding: '6px 14px', borderRadius: 99 }}>{o.status}</span>
        <span className="display" style={{ fontSize: 24, fontWeight: 600, color: 'var(--brown-900)', whiteSpace: 'nowrap' }}>{eur(o.total)}</span>
        <button onClick={() => setOpen(!open)} className="ui" style={{ background: 'none', border: '1.5px solid var(--line)', borderRadius: 99, padding: '8px 16px', fontSize: 13, color: 'var(--brown-700)', cursor: 'pointer', fontWeight: 600 }}>
          {open ? 'Masquer' : 'Détails'}
        </button>
      </div>
      {open && (
        <div style={{ borderTop: '1px solid var(--line)', padding: '8px 24px 18px' }}>
          {/* tracking */}
          {o.statusKey === 'transit' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, padding: '14px 0 20px' }}>
              {['Préparée', 'Expédiée', 'En transit', 'Livrée'].map((s, i) => {
                const done = i <= 2;
                return (
                  <React.Fragment key={s}>
                    <div style={{ textAlign: 'center' }}>
                      <span style={{ width: 26, height: 26, borderRadius: '50%', display: 'grid', placeItems: 'center', background: done ? 'var(--amber)' : 'var(--cream)', color: done ? 'var(--paper)' : 'var(--ink-faint)', border: '1px solid', borderColor: done ? 'var(--amber)' : 'var(--line)', margin: '0 auto' }}>{done ? <Icon name="check" size={14} /> : i + 1}</span>
                      <div className="ui" style={{ fontSize: 11, color: done ? 'var(--brown-700)' : 'var(--ink-faint)', marginTop: 6 }}>{s}</div>
                    </div>
                    {i < 3 && <span style={{ flex: 1, height: 2, background: i < 2 ? 'var(--amber)' : 'var(--line)', margin: '0 6px', marginBottom: 22 }} />}
                  </React.Fragment>
                );
              })}
            </div>
          )}
          {o.items.map((it, i) => {
            const p = PRODUCT_BY_ID[it.id];
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0', borderBottom: i < o.items.length - 1 ? '1px solid var(--line-soft)' : 'none' }}>
                <div style={{ width: 48, flex: 'none' }}><ProductImage p={p} ratio="1/1" rounded="var(--r-sm)" w={30} /></div>
                <div style={{ flex: 1 }}>
                  <div className="ui" style={{ fontWeight: 600, fontSize: 14.5, color: 'var(--brown-800)' }}>{p.name}</div>
                  <div className="ui" style={{ fontSize: 13, color: 'var(--ink-faint)' }}>{it.g} g · ×{it.qty}</div>
                </div>
                <button onClick={() => openProduct(p.id)} className="ui" style={{ background: 'none', border: 'none', color: 'var(--amber)', fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>Racheter</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { StoryPage, ContactPage, AccountPage });
