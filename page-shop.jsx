/* ============================================================
   Maison Mélisse — Boutique (catalogue + filtres) & Fiche produit
   ============================================================ */

function ShopPage({ nav, openProduct, addToCart, initialCat }) {
  const [cat, setCat] = useState(initialCat || 'tout');
  const [profiles, setProfiles] = useState([]);
  const [sort, setSort] = useState('pop');
  const [query, setQuery] = useState('');

  const toggleProfile = (id) => setProfiles(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);

  const list = useMemo(() => {
    let r = PRODUCTS.filter(p => cat === 'tout' || p.category === cat);
    if (profiles.length) r = r.filter(p => profiles.some(pr => p.profile.includes(pr)));
    if (query.trim()) {
      const q = query.toLowerCase();
      r = r.filter(p => (p.name + p.tagline + p.short).toLowerCase().includes(q));
    }
    r = [...r];
    if (sort === 'price-asc') r.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') r.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') r.sort((a, b) => b.rating - a.rating);
    else r.sort((a, b) => b.reviews - a.reviews);
    return r;
  }, [cat, profiles, sort, query]);

  return (
    <div style={{ background: 'var(--paper)' }}>
      {/* page header */}
      <div style={{ background: 'var(--cream)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap" style={{ padding: '52px 28px 40px' }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>La boutique</div>
          <h1 className="display" style={{ fontSize: 'clamp(38px, 5vw, 58px)', fontStyle: 'italic', fontWeight: 500, margin: 0, color: 'var(--brown-900)' }}>Tout le rucher, en pots</h1>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', maxWidth: 560, marginTop: 14 }}>
            Chaque miel raconte une floraison et un coin du Vercors. Filtrez selon votre goût — du plus doux au plus corsé.
          </p>
        </div>
      </div>

      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '248px 1fr', gap: 40, alignItems: 'start', padding: '40px 28px 90px' }} >
        {/* ---- filters sidebar ---- */}
        <aside className="shop-aside" style={{ position: 'sticky', top: 92 }}>
          <div style={{ position: 'relative', marginBottom: 26 }}>
            <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-faint)' }}><Icon name="search" size={18} /></span>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Rechercher un miel…" style={{
              width: '100%', padding: '12px 14px 12px 42px', borderRadius: 'var(--r-pill)', border: '1.5px solid var(--line)',
              fontFamily: 'var(--ui)', fontSize: 14, background: 'var(--paper-card)', color: 'var(--brown-800)', outline: 'none' }} />
          </div>

          <FilterGroup title="Catégorie">
            {CATEGORIES.map(c => (
              <button key={c.id} onClick={() => setCat(c.id)} style={radioRow(cat === c.id)}>
                <span style={radioDot(cat === c.id)} />{c.label}
              </button>
            ))}
          </FilterGroup>

          <FilterGroup title="Profil de goût">
            {PROFILES.map(pr => (
              <button key={pr.id} onClick={() => toggleProfile(pr.id)} style={radioRow(profiles.includes(pr.id))}>
                <span style={checkBox(profiles.includes(pr.id))}>{profiles.includes(pr.id) && <Icon name="check" size={12} />}</span>{pr.label}
              </button>
            ))}
          </FilterGroup>

          {(profiles.length > 0 || cat !== 'tout' || query) && (
            <button onClick={() => { setCat('tout'); setProfiles([]); setQuery(''); }} className="ui" style={{
              background: 'none', border: 'none', color: 'var(--amber)', fontSize: 13.5, fontWeight: 600, cursor: 'pointer', padding: '4px 0' }}>
              ↺ Réinitialiser les filtres
            </button>
          )}

          <div style={{ marginTop: 28, padding: 20, background: 'var(--cream)', borderRadius: 'var(--r-md)', border: '1px solid var(--line)' }}>
            <Icon name="truck" size={24} style={{ color: 'var(--amber)' }} />
            <div className="ui" style={{ fontWeight: 700, fontSize: 14, color: 'var(--brown-800)', margin: '8px 0 4px' }}>Livraison offerte dès 49 €</div>
            <div style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.5 }}>Expédié sous 48 h, calé dans du carton recyclé.</div>
          </div>
        </aside>

        {/* ---- products ---- */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22, flexWrap: 'wrap', gap: 12 }}>
            <span className="ui" style={{ fontSize: 14, color: 'var(--ink-soft)' }}>{list.length} produit{list.length > 1 ? 's' : ''}</span>
            <label className="ui" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink-soft)' }}>
              Trier&nbsp;:
              <select value={sort} onChange={e => setSort(e.target.value)} style={{
                fontFamily: 'var(--ui)', fontSize: 14, padding: '9px 14px', borderRadius: 'var(--r-pill)',
                border: '1.5px solid var(--line)', background: 'var(--paper-card)', color: 'var(--brown-800)', cursor: 'pointer', outline: 'none' }}>
                <option value="pop">Les plus aimés</option>
                <option value="rating">Mieux notés</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
              </select>
            </label>
          </div>

          {list.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--ink-soft)' }}>
              <Icon name="search" size={40} style={{ color: 'var(--ink-faint)' }} />
              <p className="display" style={{ fontStyle: 'italic', fontSize: 24, marginTop: 12 }}>Aucun miel ne correspond.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(248px, 1fr))', gap: 24 }}>
              {list.map(p => <ProductCard key={p.id} p={p} onOpen={openProduct} onAdd={addToCart} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div className="ui" style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 12 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>{children}</div>
    </div>
  );
}
function radioRow(active) {
  return { display: 'flex', alignItems: 'center', gap: 11, background: 'none', border: 'none', padding: '7px 4px',
    fontFamily: 'var(--ui)', fontSize: 14.5, cursor: 'pointer', textAlign: 'left',
    color: active ? 'var(--brown-900)' : 'var(--ink-soft)', fontWeight: active ? 600 : 400 };
}
function radioDot(active) {
  return { width: 16, height: 16, borderRadius: '50%', flex: 'none',
    border: `2px solid ${active ? 'var(--amber)' : 'var(--line)'}`,
    background: active ? 'radial-gradient(circle, var(--amber) 0 40%, transparent 46%)' : 'transparent' };
}
function checkBox(active) {
  return { width: 17, height: 17, borderRadius: 5, flex: 'none', display: 'grid', placeItems: 'center',
    border: `2px solid ${active ? 'var(--amber)' : 'var(--line)'}`, background: active ? 'var(--amber)' : 'transparent', color: 'var(--paper)' };
}

/* ============================================================
   Fiche produit
   ============================================================ */
function ProductPage({ id, nav, openProduct, addToCart }) {
  const p = PRODUCT_BY_ID[id];
  const [size, setSize] = useState(p.sizes[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [tab, setTab] = useState('desc');
  useEffect(() => { setSize(p.sizes[0]); setQty(1); setTab('desc'); window.scrollTo(0, 0); }, [id]);

  const related = PRODUCTS.filter(x => x.id !== id && (x.category === p.category || x.profile.some(pr => p.profile.includes(pr)))).slice(0, 4);
  const out = p.stock === 0;

  const doAdd = () => { addToCart(p.id, size.g, qty); setAdded(true); setTimeout(() => setAdded(false), 1800); };

  return (
    <div style={{ background: 'var(--paper)' }}>
      <div className="wrap" style={{ paddingTop: 26 }}>
        <button onClick={() => nav('shop')} className="ui" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', color: 'var(--ink-soft)', fontSize: 14, cursor: 'pointer', padding: '6px 0' }}>
          <Icon name="arrow-left" size={16} /> Retour à la boutique
        </button>
      </div>

      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, padding: '20px 28px 70px', alignItems: 'start' }}>
        {/* gallery */}
        <div style={{ position: 'sticky', top: 92 }} className="prod-gallery">
          <ProductImage p={p} ratio="1/1" rounded="var(--r-lg)" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 14 }}>
            {['Le pot', 'La récolte', "L'étiquette", 'En cuisine'].map((lbl, i) => (
              <div key={i} className="hexbg" style={{ aspectRatio: '1', borderRadius: 'var(--r-sm)', backgroundColor: p.color, opacity: i === 0 ? 1 : 0.55, border: i === 0 ? '2px solid var(--amber)' : '2px solid transparent', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
                <span className="ui" style={{ fontSize: 10, color: 'var(--paper)', textShadow: '0 1px 3px rgba(0,0,0,.4)', letterSpacing: '0.05em' }}>{lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <span style={{ background: 'var(--cream)', color: 'var(--brown-700)', fontFamily: 'var(--ui)', fontWeight: 600, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 'var(--r-pill)', border: '1px solid var(--line)' }}>{p.badge}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><Stars value={p.rating} size={15} /><span className="ui" style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{p.rating} · {p.reviews} avis</span></span>
          </div>
          <h1 className="display" style={{ fontSize: 'clamp(38px, 5vw, 54px)', fontStyle: 'italic', fontWeight: 500, margin: '0 0 8px', lineHeight: 1.02, color: 'var(--brown-900)' }}>{p.name}</h1>
          <p style={{ fontSize: 18, color: 'var(--ink-soft)', margin: '0 0 18px', fontStyle: 'italic', fontFamily: 'var(--display)' }}>{p.tagline}</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 14.5, color: 'var(--sage-deep)', marginBottom: 22 }}>
            <Icon name="pin" size={17} /> <span>{p.origin}</span>
          </div>

          {/* intensity meter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <span className="ui" style={{ fontSize: 13, color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Intensité</span>
            <div style={{ display: 'flex', gap: 5 }}>
              {[1,2,3,4,5].map(i => (
                <span key={i} style={{ width: 26, height: 8, borderRadius: 99, background: i <= p.intensity ? 'var(--honey-deep)' : 'var(--line)' }} />
              ))}
            </div>
            <span className="ui" style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{['', 'Très doux', 'Doux', 'Équilibré', 'Marqué', 'Corsé'][p.intensity]}</span>
          </div>

          <p style={{ fontSize: 16.5, color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: 26 }}>{p.short}</p>

          {/* size selector */}
          {p.sizes.length > 1 && (
            <div style={{ marginBottom: 22 }}>
              <div className="ui" style={{ fontSize: 13, color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Format</div>
              <div style={{ display: 'flex', gap: 10 }}>
                {p.sizes.map(s => (
                  <button key={s.g} onClick={() => setSize(s)} style={{
                    padding: '12px 20px', borderRadius: 'var(--r-md)', cursor: 'pointer',
                    border: `1.5px solid ${size.g === s.g ? 'var(--amber)' : 'var(--line)'}`,
                    background: size.g === s.g ? 'var(--cream)' : 'var(--paper-card)',
                    fontFamily: 'var(--ui)', textAlign: 'left' }}>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--brown-800)' }}>{s.g} g</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{eur(s.price)}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* price + add */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 18, flexWrap: 'wrap' }}>
            <div className="display" style={{ fontSize: 40, fontWeight: 600, color: 'var(--brown-900)' }}>{eur(size.price)}</div>
            <span className="ui" style={{ fontSize: 13, color: 'var(--ink-faint)' }}>soit {eur(size.price / size.g * 100)} / 100 g</span>
          </div>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 18, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid var(--line)', borderRadius: 'var(--r-pill)', background: 'var(--paper-card)' }}>
              <button onClick={() => setQty(q => Math.max(1, q - 1))} style={qtyBtn}><Icon name="minus" size={16} /></button>
              <span className="ui" style={{ width: 40, textAlign: 'center', fontWeight: 700, fontSize: 16 }}>{qty}</span>
              <button onClick={() => setQty(q => q + 1)} style={qtyBtn}><Icon name="plus" size={16} /></button>
            </div>
            <Btn variant={added ? 'solid' : 'honey'} size="lg" onClick={doAdd} disabled={out} style={{ flex: '1 1 220px' }}>
              {out ? 'Épuisé pour le moment' : added ? <><Icon name="check" size={18} /> Ajouté au panier</> : <><Icon name="cart" size={18} /> Ajouter — {eur(size.price * qty)}</>}
            </Btn>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, padding: '16px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', marginBottom: 26 }}>
            {[['hand', 'Extrait à froid'], ['farm', 'Mis en pot à la ferme'], ['truck', 'Expédié sous 48 h']].map(([ic, t]) => (
              <span key={t} className="ui" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: 'var(--ink-soft)' }}><Icon name={ic} size={17} style={{ color: 'var(--amber)' }} /> {t}</span>
            ))}
          </div>

          {/* tabs */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 18, borderBottom: '1px solid var(--line)' }}>
            {[['desc', 'Description'], ['notes', 'Notes & accords'], ['origin', 'Origine']].map(([k, l]) => (
              <button key={k} onClick={() => setTab(k)} className="ui" style={{
                background: 'none', border: 'none', padding: '10px 4px', marginRight: 18, cursor: 'pointer',
                fontSize: 14.5, fontWeight: tab === k ? 700 : 500,
                color: tab === k ? 'var(--brown-900)' : 'var(--ink-faint)',
                borderBottom: tab === k ? '2px solid var(--amber)' : '2px solid transparent', marginBottom: -1 }}>{l}</button>
            ))}
          </div>
          <div style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.7, minHeight: 120 }}>
            {tab === 'desc' && <p style={{ margin: 0 }}>{p.desc}</p>}
            {tab === 'notes' && (
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 18 }}>
                  {p.notes.map(n => <span key={n} className="ui" style={{ background: 'var(--cream)', border: '1px solid var(--line)', borderRadius: 'var(--r-pill)', padding: '7px 16px', fontSize: 13.5, color: 'var(--brown-700)' }}>{n}</span>)}
                </div>
                <p style={{ margin: 0 }}><strong style={{ color: 'var(--brown-800)' }}>À déguster&nbsp;:</strong> {p.pairing}</p>
              </div>
            )}
            {tab === 'origin' && (
              <div>
                <p style={{ marginTop: 0 }}><strong style={{ color: 'var(--brown-800)' }}>Provenance&nbsp;:</strong> {p.origin}</p>
                <p style={{ margin: 0 }}>100 % récolté, extrait et mis en pot par Maison Mélisse, sur l'exploitation. Aucun miel acheté à l'extérieur, aucun assemblage. Conservation&nbsp;: à l'abri de la lumière, à température ambiante. La cristallisation est naturelle.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* related */}
      <section style={{ background: 'var(--cream)', padding: '70px 0' }}>
        <div className="wrap">
          <SectionHead eyebrow="À goûter aussi" title="Dans le même esprit" align="left" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24, marginTop: 36 }}>
            {related.map(rp => <ProductCard key={rp.id} p={rp} onOpen={openProduct} onAdd={addToCart} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
const qtyBtn = { width: 44, height: 46, background: 'none', border: 'none', display: 'grid', placeItems: 'center', color: 'var(--brown-800)', cursor: 'pointer' };

Object.assign(window, { ShopPage, ProductPage });
