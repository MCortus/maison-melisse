/* ============================================================
   Maison Mélisse — application & routeur
   ============================================================ */

const CART_KEY = 'melisse_cart_v1';

function useCart() {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; }
  });
  useEffect(() => {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch {}
  }, [cart]);

  const addToCart = (id, g, qty = 1) => {
    setCart(c => {
      const idx = c.findIndex(x => x.id === id && x.g === g);
      if (idx >= 0) { const n = [...c]; n[idx] = { ...n[idx], qty: n[idx].qty + qty }; return n; }
      return [...c, { id, g, qty }];
    });
  };
  const setQty = (line, qty) => setCart(c => c.map(x => (x.id === line.id && x.g === line.g) ? { ...x, qty } : x));
  const remove = (line) => setCart(c => c.filter(x => !(x.id === line.id && x.g === line.g)));
  const clearCart = () => setCart([]);
  const count = cart.reduce((s, x) => s + x.qty, 0);
  return { cart, addToCart, setQty, remove, clearCart, count };
}

/* ---- tiny hash router ----
   #/             home
   #/boutique     shop
   #/produit/<id> product
   #/commande     checkout
   #/histoire     story
   #/contact      contact
   #/compte       account
*/
function parseHash() {
  const h = (window.location.hash || '#/').replace(/^#/, '');
  const parts = h.split('/').filter(Boolean);
  if (parts.length === 0) return { route: 'home' };
  const map = { boutique: 'shop', histoire: 'story', contact: 'contact', compte: 'account', commande: 'checkout' };
  if (parts[0] === 'produit') return { route: 'product', id: parts[1] };
  return { route: map[parts[0]] || 'home' };
}
function routeToHash(route, param) {
  const map = { home: '/', shop: '/boutique', story: '/histoire', contact: '/contact', account: '/compte', checkout: '/commande' };
  if (route === 'product') return '#/produit/' + param;
  return '#' + (map[route] || '/');
}

function App() {
  const [loc, setLoc] = useState(parseHash);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, addToCart, setQty, remove, clearCart, count } = useCart();

  useEffect(() => {
    const onHash = () => { setLoc(parseHash()); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const nav = (route, param) => {
    window.location.hash = routeToHash(route, param);
    // hashchange fires; also set immediately for snappiness
    setLoc(route === 'product' ? { route, id: param } : { route });
    if (route !== 'product') window.scrollTo(0, 0);
  };
  const openProduct = (id) => { nav('product', id); window.scrollTo(0, 0); };

  const addAndPulse = (id, g, qty) => { addToCart(id, g, qty); setCartOpen(true); };

  const { route, id } = loc;

  return (
    <div>
      <Header route={route} nav={nav} cartCount={count} onCart={() => setCartOpen(true)} />

      {route === 'home' && <HomePage nav={nav} openProduct={openProduct} addToCart={addToCart} />}
      {route === 'shop' && <ShopPage nav={nav} openProduct={openProduct} addToCart={addToCart} />}
      {route === 'product' && PRODUCT_BY_ID[id] && <ProductPage id={id} nav={nav} openProduct={openProduct} addToCart={addToCart} />}
      {route === 'product' && !PRODUCT_BY_ID[id] && <NotFound nav={nav} />}
      {route === 'checkout' && <CheckoutPage cart={cart} setQty={setQty} remove={remove} nav={nav} clearCart={clearCart} />}
      {route === 'story' && <StoryPage nav={nav} />}
      {route === 'contact' && <ContactPage />}
      {route === 'account' && <AccountPage nav={nav} openProduct={openProduct} />}

      <Footer nav={nav} />

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} setQty={setQty} remove={remove}
        goCheckout={() => nav('checkout')} nav={nav} />
    </div>
  );
}

function NotFound({ nav }) {
  return (
    <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', padding: 60, textAlign: 'center' }}>
      <div>
        <div className="display" style={{ fontSize: 80, fontStyle: 'italic', color: 'var(--honey)' }}>oups</div>
        <p style={{ color: 'var(--ink-soft)', marginBottom: 20 }}>Ce produit s'est envolé de la ruche.</p>
        <Btn variant="honey" onClick={() => nav('shop')}>Retour à la boutique</Btn>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
