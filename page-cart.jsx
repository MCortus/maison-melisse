/* ============================================================
   Maison Mélisse — Panier (tiroir) & Tunnel de commande
   ============================================================ */

const SHIP_FREE_FROM = 49;
const SHIP_RELAY = 4.90;
const SHIP_HOME = 6.90;

function cartLines(cart) {
  return cart.map(c => {
    const p = PRODUCT_BY_ID[c.id];
    const sz = p.sizes.find(s => s.g === c.g) || p.sizes[0];
    return { ...c, p, sz, lineTotal: sz.price * c.qty };
  });
}
function cartSubtotal(cart) {
  return cartLines(cart).reduce((s, l) => s + l.lineTotal, 0);
}

/* ---------------- Mini cart line ---------------- */
function CartLine({ line, setQty, remove, compact }) {
  const { p, sz, qty, lineTotal } = line;
  return (
    <div style={{ display: 'flex', gap: 14, padding: compact ? '14px 0' : '18px 0', borderBottom: '1px solid var(--line)' }}>
      <div style={{ width: compact ? 64 : 84, flex: 'none' }}>
        <ProductImage p={p} ratio="1/1" rounded="var(--r-sm)" w={compact ? 42 : 56} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
          <div>
            <div className="display" style={{ fontSize: compact ? 18 : 21, fontWeight: 600, color: 'var(--brown-900)', lineHeight: 1.1 }}>{p.name}</div>
            <div className="ui" style={{ fontSize: 12.5, color: 'var(--ink-faint)', marginTop: 2 }}>{sz.g} g · {eur(sz.price)}</div>
          </div>
          <button onClick={() => remove(line)} className="ui" style={{ background: 'none', border: 'none', color: 'var(--ink-faint)', cursor: 'pointer', height: 'fit-content' }}><Icon name="close" size={17} /></button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid var(--line)', borderRadius: 'var(--r-pill)', background: 'var(--paper-card)' }}>
            <button onClick={() => setQty(line, Math.max(1, qty - 1))} style={miniQty}><Icon name="minus" size={13} /></button>
            <span className="ui" style={{ width: 30, textAlign: 'center', fontWeight: 700, fontSize: 14 }}>{qty}</span>
            <button onClick={() => setQty(line, qty + 1)} style={miniQty}><Icon name="plus" size={13} /></button>
          </div>
          <span className="ui" style={{ fontWeight: 700, fontSize: 16, color: 'var(--brown-800)' }}>{eur(lineTotal)}</span>
        </div>
      </div>
    </div>
  );
}
const miniQty = { width: 32, height: 34, background: 'none', border: 'none', display: 'grid', placeItems: 'center', color: 'var(--brown-800)', cursor: 'pointer' };

/* ---------------- Free-shipping progress ---------------- */
function ShipBar({ subtotal }) {
  const pct = Math.min(100, (subtotal / SHIP_FREE_FROM) * 100);
  const left = Math.max(0, SHIP_FREE_FROM - subtotal);
  return (
    <div style={{ background: 'var(--cream)', borderRadius: 'var(--r-md)', padding: '14px 16px', border: '1px solid var(--line)' }}>
      <div className="ui" style={{ fontSize: 13.5, color: 'var(--brown-700)', marginBottom: 9, display: 'flex', gap: 8, alignItems: 'center' }}>
        <Icon name="truck" size={17} style={{ color: 'var(--amber)' }} />
        {left > 0 ? <span>Plus que <strong>{eur(left)}</strong> pour la livraison offerte&nbsp;!</span> : <span><strong>Livraison offerte</strong> débloquée — bravo&nbsp;!</span>}
      </div>
      <div style={{ height: 7, borderRadius: 99, background: 'var(--line)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: pct + '%', background: 'linear-gradient(90deg, var(--honey), var(--honey-deep))', borderRadius: 99, transition: 'width .4s ease' }} />
      </div>
    </div>
  );
}

/* ============================================================
   Cart drawer (slide-over)
   ============================================================ */
function CartDrawer({ open, onClose, cart, setQty, remove, goCheckout, nav }) {
  const lines = cartLines(cart);
  const subtotal = cartSubtotal(cart);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 80, pointerEvents: open ? 'auto' : 'none' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(36,20,7,0.5)', opacity: open ? 1 : 0, transition: 'opacity .3s' }} />
      <aside style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, width: 'min(440px, 100%)', background: 'var(--paper)',
        transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform .35s cubic-bezier(.4,0,.2,1)',
        display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 24px', borderBottom: '1px solid var(--line)' }}>
          <span className="display" style={{ fontSize: 25, fontStyle: 'italic', fontWeight: 600 }}>Votre panier</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--brown-800)' }}><Icon name="close" size={24} /></button>
        </div>

        {lines.length === 0 ? (
          <div style={{ flex: 1, display: 'grid', placeItems: 'center', padding: 40, textAlign: 'center' }}>
            <div>
              <span style={{ color: 'var(--line)' }}><Icon name="cart" size={56} /></span>
              <p className="display" style={{ fontStyle: 'italic', fontSize: 24, margin: '14px 0 6px' }}>Votre panier est vide</p>
              <p style={{ fontSize: 14.5, color: 'var(--ink-soft)', marginBottom: 22 }}>Il attend un bon pot de miel.</p>
              <Btn variant="honey" onClick={() => { onClose(); nav('shop'); }}>Voir la boutique</Btn>
            </div>
          </div>
        ) : (
          <>
            <div style={{ flex: 1, overflowY: 'auto', padding: '8px 24px 16px' }}>
              {lines.map((l, i) => <CartLine key={i} line={l} setQty={setQty} remove={remove} compact />)}
            </div>
            <div style={{ padding: '18px 24px 24px', borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <ShipBar subtotal={subtotal} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span className="ui" style={{ fontSize: 14, color: 'var(--ink-soft)' }}>Sous-total</span>
                <span className="display" style={{ fontSize: 30, fontWeight: 600, color: 'var(--brown-900)' }}>{eur(subtotal)}</span>
              </div>
              <Btn variant="solid" size="lg" full onClick={() => { onClose(); goCheckout(); }}>Passer commande <Icon name="arrow" size={18} /></Btn>
              <button onClick={onClose} className="ui" style={{ background: 'none', border: 'none', color: 'var(--ink-soft)', fontSize: 13.5, cursor: 'pointer' }}>Continuer mes achats</button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

/* ============================================================
   Checkout — tunnel multi-étapes
   ============================================================ */
function CheckoutPage({ cart, setQty, remove, nav, clearCart }) {
  const [step, setStep] = useState(0); // 0 panier · 1 livraison · 2 paiement · 3 confirmation
  const [ship, setShip] = useState('relay');
  const [form, setForm] = useState({ email: '', firstname: '', name: '', address: '', zip: '', city: '', phone: '' });
  const [pay, setPay] = useState({ card: '', exp: '', cvc: '', holder: '' });
  const [orderId] = useState('MEL-' + Math.floor(2400 + Math.random() * 99));

  const lines = cartLines(cart);
  const subtotal = cartSubtotal(cart);
  const shipCost = subtotal >= SHIP_FREE_FROM ? 0 : (ship === 'home' ? SHIP_HOME : SHIP_RELAY);
  const total = subtotal + shipCost;

  useEffect(() => { window.scrollTo(0, 0); }, [step]);

  const steps = ["Panier", "Livraison", "Paiement", "Confirmation"];

  if (lines.length === 0 && step < 3) {
    return (
      <div style={{ background: 'var(--paper)', minHeight: '60vh', display: 'grid', placeItems: 'center', padding: 60 }}>
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: 'var(--line)' }}><Icon name="cart" size={64} /></span>
          <h1 className="display" style={{ fontStyle: 'italic', fontSize: 34, margin: '16px 0 8px' }}>Votre panier est vide</h1>
          <p style={{ color: 'var(--ink-soft)', marginBottom: 24 }}>Ajoutez quelques pots avant de passer en caisse.</p>
          <Btn variant="honey" size="lg" onClick={() => nav('shop')}>Découvrir nos miels</Btn>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--paper)', minHeight: '70vh' }}>
      <div className="wrap" style={{ padding: '40px 28px 80px' }}>
        {/* stepper */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginBottom: 44, flexWrap: 'wrap' }}>
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 30, height: 30, borderRadius: '50%', display: 'grid', placeItems: 'center', fontFamily: 'var(--ui)', fontWeight: 700, fontSize: 13,
                  background: i <= step ? 'var(--brown-800)' : 'var(--cream)', color: i <= step ? 'var(--paper)' : 'var(--ink-faint)', border: '1px solid', borderColor: i <= step ? 'var(--brown-800)' : 'var(--line)' }}>
                  {i < step ? <Icon name="check" size={15} /> : i + 1}</span>
                <span className="ui" style={{ fontSize: 13.5, fontWeight: i === step ? 700 : 500, color: i <= step ? 'var(--brown-800)' : 'var(--ink-faint)' }}>{s}</span>
              </div>
              {i < steps.length - 1 && <span style={{ width: 36, height: 1.5, background: i < step ? 'var(--brown-800)' : 'var(--line)', margin: '0 14px' }} />}
            </React.Fragment>
          ))}
        </div>

        {step === 3 ? (
          <Confirmation orderId={orderId} total={total} email={form.email} ship={ship} nav={nav} />
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 40, alignItems: 'start' }} className="checkout-grid">
            {/* left column */}
            <div>
              {step === 0 && (
                <div>
                  <h1 className="display" style={{ fontSize: 38, fontStyle: 'italic', fontWeight: 500, margin: '0 0 8px' }}>Votre panier</h1>
                  <p className="ui" style={{ color: 'var(--ink-soft)', fontSize: 14, marginBottom: 18 }}>{lines.length} référence{lines.length > 1 ? 's' : ''}</p>
                  <div style={{ background: 'var(--paper-card)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: '4px 24px 14px' }}>
                    {lines.map((l, i) => <CartLine key={i} line={l} setQty={setQty} remove={remove} />)}
                  </div>
                  <div style={{ marginTop: 18 }}><ShipBar subtotal={subtotal} /></div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h1 className="display" style={{ fontSize: 34, fontStyle: 'italic', fontWeight: 500, margin: '0 0 24px' }}>Où vous livrer&nbsp;?</h1>
                  <Field label="Adresse e-mail" value={form.email} onChange={v => setForm(f => ({...f, email: v}))} type="email" placeholder="vous@email.fr" full />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <Field label="Prénom" value={form.firstname} onChange={v => setForm(f => ({...f, firstname: v}))} />
                    <Field label="Nom" value={form.name} onChange={v => setForm(f => ({...f, name: v}))} />
                  </div>
                  <Field label="Adresse" value={form.address} onChange={v => setForm(f => ({...f, address: v}))} full placeholder="N° et rue" />
                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 14 }}>
                    <Field label="Code postal" value={form.zip} onChange={v => setForm(f => ({...f, zip: v}))} />
                    <Field label="Ville" value={form.city} onChange={v => setForm(f => ({...f, city: v}))} />
                  </div>
                  <Field label="Téléphone" value={form.phone} onChange={v => setForm(f => ({...f, phone: v}))} full placeholder="Pour le suivi de livraison" />

                  <div className="ui" style={{ fontSize: 13, color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '24px 0 12px' }}>Mode de livraison</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <ShipOption active={ship === 'relay'} onClick={() => setShip('relay')} title="Point relais" desc="2–3 jours ouvrés · Mondial Relay" price={subtotal >= SHIP_FREE_FROM ? 0 : SHIP_RELAY} />
                    <ShipOption active={ship === 'home'} onClick={() => setShip('home')} title="À domicile" desc="2–3 jours ouvrés · Colissimo suivi" price={subtotal >= SHIP_FREE_FROM ? 0 : SHIP_HOME} />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h1 className="display" style={{ fontSize: 34, fontStyle: 'italic', fontWeight: 500, margin: '0 0 8px' }}>Paiement sécurisé</h1>
                  <p className="ui" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--sage-deep)', fontSize: 13.5, marginBottom: 24 }}>
                    <Icon name="lock" size={16} /> Cryptage SSL · propulsé par Stripe
                  </p>
                  <div style={{ background: 'var(--paper-card)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 24 }}>
                    <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                      {['Visa', 'MC', 'CB', 'Apple Pay'].map(c => (
                        <span key={c} className="ui" style={{ fontSize: 11, fontWeight: 700, padding: '6px 11px', borderRadius: 6, background: 'var(--cream)', border: '1px solid var(--line)', color: 'var(--brown-700)' }}>{c}</span>
                      ))}
                    </div>
                    <Field label="Numéro de carte" value={pay.card} onChange={v => setPay(p => ({...p, card: v}))} full placeholder="4242 4242 4242 4242" icon="lock" />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      <Field label="Expiration" value={pay.exp} onChange={v => setPay(p => ({...p, exp: v}))} placeholder="MM/AA" />
                      <Field label="CVC" value={pay.cvc} onChange={v => setPay(p => ({...p, cvc: v}))} placeholder="•••" />
                    </div>
                    <Field label="Titulaire de la carte" value={pay.holder} onChange={v => setPay(p => ({...p, holder: v}))} full placeholder="Prénom Nom" />
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--ink-faint)', marginTop: 14, lineHeight: 1.5 }}>
                    Démonstration — aucun paiement réel ne sera effectué. Vos données ne sont pas enregistrées.
                  </p>
                </div>
              )}

              {/* nav buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30, gap: 14, flexWrap: 'wrap' }}>
                <Btn variant="ghost" onClick={() => step === 0 ? nav('shop') : setStep(step - 1)}>
                  <Icon name="arrow-left" size={16} /> {step === 0 ? 'Continuer mes achats' : 'Retour'}
                </Btn>
                <Btn variant="honey" size="lg" onClick={() => setStep(step + 1)} style={{ minWidth: 200 }}>
                  {step === 0 && <>Vers la livraison <Icon name="arrow" size={18} /></>}
                  {step === 1 && <>Vers le paiement <Icon name="arrow" size={18} /></>}
                  {step === 2 && <><Icon name="lock" size={17} /> Payer {eur(total)}</>}
                </Btn>
              </div>
            </div>

            {/* order summary */}
            <OrderSummary lines={lines} subtotal={subtotal} shipCost={shipCost} total={total} step={step} />
          </div>
        )}
      </div>
    </div>
  );
}

function OrderSummary({ lines, subtotal, shipCost, total, step }) {
  return (
    <aside style={{ background: 'var(--cream)', borderRadius: 'var(--r-lg)', border: '1px solid var(--line)', padding: 24, position: 'sticky', top: 92 }}>
      <div className="ui" style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 16 }}>Récapitulatif</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxHeight: 230, overflowY: 'auto', marginBottom: 16 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 46, flex: 'none', position: 'relative' }}>
              <ProductImage p={l.p} ratio="1/1" rounded="var(--r-sm)" w={30} />
              <span style={{ position: 'absolute', top: -6, right: -6, width: 18, height: 18, borderRadius: '50%', background: 'var(--brown-800)', color: 'var(--paper)', fontFamily: 'var(--ui)', fontWeight: 700, fontSize: 11, display: 'grid', placeItems: 'center' }}>{l.qty}</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="ui" style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--brown-800)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{l.p.name}</div>
              <div className="ui" style={{ fontSize: 12, color: 'var(--ink-faint)' }}>{l.sz.g} g</div>
            </div>
            <span className="ui" style={{ fontSize: 14, fontWeight: 600, color: 'var(--brown-800)' }}>{eur(l.lineTotal)}</span>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--line)', paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 9 }}>
        <Row label="Sous-total" value={eur(subtotal)} />
        <Row label="Livraison" value={step >= 1 ? (shipCost === 0 ? 'Offerte' : eur(shipCost)) : 'Calculée à l\'étape suivante'} accent={shipCost === 0 && step >= 1} />
      </div>
      <div style={{ borderTop: '1px solid var(--line)', marginTop: 14, paddingTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span className="ui" style={{ fontWeight: 700, fontSize: 15, color: 'var(--brown-800)' }}>Total</span>
        <span className="display" style={{ fontSize: 32, fontWeight: 600, color: 'var(--brown-900)' }}>{eur(step >= 1 ? total : subtotal)}</span>
      </div>
      <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 9, fontSize: 12.5, color: 'var(--sage-deep)' }} className="ui">
        <Icon name="leaf" size={16} /> Emballage en carton recyclé &amp; recyclable
      </div>
    </aside>
  );
}
function Row({ label, value, accent }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span className="ui" style={{ fontSize: 14, color: 'var(--ink-soft)' }}>{label}</span>
      <span className="ui" style={{ fontSize: 14, fontWeight: 600, color: accent ? 'var(--sage-deep)' : 'var(--brown-800)' }}>{value}</span>
    </div>
  );
}

function ShipOption({ active, onClick, title, desc, price }) {
  return (
    <button onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderRadius: 'var(--r-md)', cursor: 'pointer', textAlign: 'left',
      border: `1.5px solid ${active ? 'var(--amber)' : 'var(--line)'}`, background: active ? 'var(--cream)' : 'var(--paper-card)' }}>
      <span style={radioDot(active)} />
      <div style={{ flex: 1 }}>
        <div className="ui" style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--brown-800)' }}>{title}</div>
        <div className="ui" style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{desc}</div>
      </div>
      <span className="ui" style={{ fontWeight: 700, fontSize: 14.5, color: price === 0 ? 'var(--sage-deep)' : 'var(--brown-800)' }}>{price === 0 ? 'Offerte' : eur(price)}</span>
    </button>
  );
}

function Field({ label, value, onChange, type, placeholder, full, icon }) {
  return (
    <label style={{ display: 'block', marginBottom: 14 }}>
      <span className="ui" style={{ display: 'block', fontSize: 13, color: 'var(--ink-soft)', marginBottom: 6, fontWeight: 500 }}>{label}</span>
      <span style={{ position: 'relative', display: 'block' }}>
        <input value={value} onChange={e => onChange(e.target.value)} type={type || 'text'} placeholder={placeholder} style={{
          width: '100%', padding: icon ? '13px 42px 13px 16px' : '13px 16px', borderRadius: 'var(--r-md)', border: '1.5px solid var(--line)',
          fontFamily: 'var(--ui)', fontSize: 15, background: 'var(--paper-card)', color: 'var(--brown-800)', outline: 'none' }}
          onFocus={e => e.target.style.borderColor = 'var(--amber)'} onBlur={e => e.target.style.borderColor = 'var(--line)'} />
        {icon && <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-faint)' }}><Icon name={icon} size={17} /></span>}
      </span>
    </label>
  );
}

function Confirmation({ orderId, total, email, ship, nav }) {
  return (
    <div style={{ maxWidth: 620, margin: '0 auto', textAlign: 'center', padding: '20px 0 40px' }}>
      <div style={{ width: 88, height: 88, borderRadius: '50%', background: 'var(--sage-pale)', color: 'var(--sage-deep)', display: 'grid', placeItems: 'center', margin: '0 auto 24px', animation: 'floatUp .5s ease both' }}>
        <Icon name="check" size={44} />
      </div>
      <div className="script" style={{ fontSize: 32, color: 'var(--amber)', lineHeight: 1 }}>merci beaucoup&nbsp;!</div>
      <h1 className="display" style={{ fontSize: 'clamp(34px, 5vw, 50px)', fontStyle: 'italic', fontWeight: 500, margin: '6px 0 16px', color: 'var(--brown-900)' }}>Votre commande est passée</h1>
      <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: 28 }}>
        Camille prépare votre colis à la ferme. Un e-mail de confirmation part vers <strong>{email || 'votre boîte mail'}</strong> avec le suivi.
      </p>
      <div style={{ background: 'var(--paper-card)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: '24px 28px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 18, marginBottom: 28 }}>
        {[['Commande', orderId], ['Total payé', eur(total)], ['Livraison', ship === 'home' ? 'À domicile' : 'Point relais'], ['Estimée', '2–3 jours']].map(([l, v]) => (
          <div key={l}>
            <div className="ui" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 5 }}>{l}</div>
            <div className="display" style={{ fontSize: 22, fontWeight: 600, color: 'var(--brown-800)' }}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Btn variant="solid" size="lg" onClick={() => nav('account')}>Suivre ma commande</Btn>
        <Btn variant="outline" size="lg" onClick={() => nav('home')}>Retour à l'accueil</Btn>
      </div>
    </div>
  );
}

Object.assign(window, { CartDrawer, CheckoutPage, cartSubtotal, cartLines });
