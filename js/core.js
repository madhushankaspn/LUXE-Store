/* ========================================
   LUXE STORE - Core JavaScript
   Data, utilities, shared functionality
   ======================================== */

'use strict';

// ============================================================
// SAMPLE PRODUCT DATA
// ============================================================
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Obsidian Trench Coat",
    category: "Outerwear",
    price: 289,
    originalPrice: 389,
    description: "A masterfully tailored trench coat in premium wool blend. The structured silhouette and double-breasted design create an authoritative presence, while the flowing cut ensures effortless movement. Features deep pockets and a removable belt.",
    images: ["https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80", "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#1a1a1a", "#4a3728", "#2c3e50"],
    colorNames: ["Obsidian", "Cognac", "Navy"],
    badge: "sale",
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ["coat", "outerwear", "luxury", "winter"]
  },
  {
    id: 2,
    name: "Silk Noir Blouse",
    category: "Tops",
    price: 145,
    originalPrice: null,
    description: "Pure silk blouse with a fluid, relaxed silhouette. The charmeuse fabric catches light beautifully, creating an effortlessly luxurious appearance. Features delicate mother-of-pearl buttons and a subtle V-neckline.",
    images: ["https://images.unsplash.com/photo-1594938298603-c8148c4b4e79?w=600&q=80", "https://images.unsplash.com/photo-1607522370275-f6fd0aca7e0e?w=600&q=80"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["#0a0a0a", "#f5f0e8", "#722f37"],
    colorNames: ["Noir", "Ivory", "Bordeaux"],
    badge: "new",
    featured: true,
    inStock: true,
    rating: 4.6,
    reviews: 89,
    tags: ["blouse", "silk", "tops", "luxury"]
  },
  {
    id: 3,
    name: "Monochrome Wide-Leg Trousers",
    category: "Bottoms",
    price: 198,
    originalPrice: 249,
    description: "Impeccably crafted wide-leg trousers in a luxe wool-crepe blend. The high waistline elongates the silhouette while the wide leg creates a commanding, editorial presence. Fully lined for comfort.",
    images: ["https://images.unsplash.com/photo-1594938298603-c8148c4b4e79?w=600&q=80", "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#1a1a1a", "#e8e4da", "#2c2c2c"],
    colorNames: ["Black", "Cream", "Charcoal"],
    badge: "sale",
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 56,
    tags: ["trousers", "bottoms", "wide-leg"]
  },
  {
    id: 4,
    name: "Cashmere Oversized Sweater",
    category: "Knitwear",
    price: 320,
    originalPrice: null,
    description: "Indulge in the ultimate luxury with this oversized sweater in the finest Grade-A Mongolian cashmere. The relaxed, cocoon-like shape invites you to wrap yourself in unparalleled softness.",
    images: ["https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80", "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80"],
    sizes: ["XS/S", "M/L", "XL/XXL"],
    colors: ["#c9a89a", "#1a1a1a", "#8b7355", "#4a4a6a"],
    colorNames: ["Rose Dust", "Black", "Camel", "Slate"],
    badge: "new",
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 203,
    tags: ["cashmere", "sweater", "knitwear", "luxury"]
  },
  {
    id: 5,
    name: "Avant-Garde Blazer",
    category: "Outerwear",
    price: 375,
    originalPrice: 450,
    description: "A sculptural blazer that redefines power dressing. Structured shoulders meet a carefully deconstructed silhouette in this piece that blurs the line between fashion and architecture.",
    images: ["https://images.unsplash.com/photo-1594938298603-c8148c4b4e79?w=600&q=80", "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#1a1a1a", "#2c3e50", "#3d2314"],
    colorNames: ["Black", "Midnight", "Tobacco"],
    badge: "sale",
    featured: true,
    inStock: true,
    rating: 4.5,
    reviews: 78,
    tags: ["blazer", "outerwear", "formal"]
  },
  {
    id: 6,
    name: "Velvet Evening Dress",
    category: "Dresses",
    price: 490,
    originalPrice: null,
    description: "A show-stopping velvet gown that commands the room. The bias-cut falls in fluid pools of rich velvet, while subtle ruching at the bodice flatters the figure with absolute elegance.",
    images: ["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80", "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#1a0a2e", "#1a1a1a", "#722f37"],
    colorNames: ["Deep Violet", "Noir", "Bordeaux"],
    badge: null,
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 167,
    tags: ["dress", "evening", "velvet", "formal"]
  },
  {
    id: 7,
    name: "Deconstructed Denim Jacket",
    category: "Outerwear",
    price: 215,
    originalPrice: null,
    description: "Raw-edge denim jacket with artful distressing and custom stitching. A contemporary take on a classic, this piece brings edge and sophistication in equal measure.",
    images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80", "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=600&q=80"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#4a6fa5", "#1a1a1a", "#c9b89a"],
    colorNames: ["Indigo", "Washed Black", "Raw"],
    badge: "new",
    featured: false,
    inStock: true,
    rating: 4.4,
    reviews: 43,
    tags: ["denim", "jacket", "casual", "streetwear"]
  },
  {
    id: 8,
    name: "Structured Mini Skirt",
    category: "Bottoms",
    price: 165,
    originalPrice: 195,
    description: "A tailored mini skirt with architectural pleating and a concealed back zip. Made from a heavyweight fabric that holds its shape beautifully while allowing confident movement.",
    images: ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80", "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=600&q=80"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#1a1a1a", "#8b7355", "#2c2c2c"],
    colorNames: ["Black", "Camel", "Charcoal"],
    badge: "sale",
    featured: false,
    inStock: true,
    rating: 4.6,
    reviews: 95,
    tags: ["skirt", "mini", "bottoms", "tailored"]
  },
  {
    id: 9,
    name: "Linen Maxi Dress",
    category: "Dresses",
    price: 240,
    originalPrice: null,
    description: "Effortless linen maxi dress with a relaxed, flowing silhouette. The adjustable tie-waist and slit hem make this piece as practical as it is beautiful — from morning coffee to evening gatherings.",
    images: ["https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80", "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#e8e0d5", "#1a1a1a", "#8b7355"],
    colorNames: ["Sand", "Noir", "Earth"],
    badge: null,
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 112,
    tags: ["dress", "linen", "maxi", "casual"]
  },
  {
    id: 10,
    name: "Technical Bomber Jacket",
    category: "Outerwear",
    price: 295,
    originalPrice: 345,
    description: "A sleek bomber jacket engineered in water-resistant ripstop nylon. Utility meets sophistication with concealed zip pockets and a ribbed collar, cuffs, and hem.",
    images: ["https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80", "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#1a1a1a", "#2c3e50", "#3d4a1a"],
    colorNames: ["Black", "Navy", "Olive"],
    badge: "sale",
    featured: false,
    inStock: true,
    rating: 4.5,
    reviews: 67,
    tags: ["bomber", "jacket", "technical", "outerwear"]
  },
  {
    id: 11,
    name: "Ribbed Turtleneck",
    category: "Tops",
    price: 125,
    originalPrice: null,
    description: "A wardrobe essential reimagined in ultra-fine ribbed knit. The body-conscious silhouette and high neck create a clean, architectural profile that works with everything from tailored trousers to denim.",
    images: ["https://images.unsplash.com/photo-1588099768531-a72d4a198538?w=600&q=80", "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&q=80"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["#1a1a1a", "#f5f0e8", "#c9a89a", "#2c3e50"],
    colorNames: ["Black", "Ivory", "Blush", "Navy"],
    badge: null,
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 289,
    tags: ["turtleneck", "tops", "knitwear", "essential"]
  },
  {
    id: 12,
    name: "Leather Cargo Pants",
    category: "Bottoms",
    price: 445,
    originalPrice: null,
    description: "Premium lambskin leather cargo pants that push the boundaries of streetwear luxury. The utilitarian pockets and clean lines create a compelling tension between function and high fashion.",
    images: ["https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=600&q=80", "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#1a1a1a", "#3d2314"],
    colorNames: ["Black", "Brown"],
    badge: "new",
    featured: false,
    inStock: true,
    rating: 4.6,
    reviews: 38,
    tags: ["leather", "cargo", "pants", "luxury", "streetwear"]
  }
];

const CATEGORIES = ["All", "Outerwear", "Tops", "Bottoms", "Dresses", "Knitwear"];
const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

// ============================================================
// LOCAL STORAGE HELPERS
// ============================================================
const Storage = {
  get(key, fallback = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch { return fallback; }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch { return false; }
  },

  remove(key) {
    localStorage.removeItem(key);
  }
};

// ============================================================
// CART SYSTEM
// ============================================================
const Cart = {
  getItems() {
    return Storage.get('luxe_cart', []);
  },

  addItem(product, size, color, colorName, qty = 1) {
    const items = this.getItems();
    const key = `${product.id}-${size}-${color}`;
    const existing = items.find(i => i.key === key);

    if (existing) {
      existing.qty += qty;
    } else {
      items.push({
        key,
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category,
        size,
        color,
        colorName,
        qty
      });
    }

    Storage.set('luxe_cart', items);
    Cart.updateBadge();
    return items;
  },

  removeItem(key) {
    const items = this.getItems().filter(i => i.key !== key);
    Storage.set('luxe_cart', items);
    Cart.updateBadge();
    return items;
  },

  updateQty(key, qty) {
    const items = this.getItems();
    const item = items.find(i => i.key === key);
    if (item) {
      item.qty = Math.max(1, qty);
      Storage.set('luxe_cart', items);
    }
    Cart.updateBadge();
    return items;
  },

  clear() {
    Storage.remove('luxe_cart');
    Cart.updateBadge();
  },

  getTotal() {
    return this.getItems().reduce((sum, i) => sum + (i.price * i.qty), 0);
  },

  getCount() {
    return this.getItems().reduce((sum, i) => sum + i.qty, 0);
  },

  updateBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = this.getCount();
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
  }
};

// ============================================================
// AUTH SYSTEM
// ============================================================
const Auth = {
  register(name, email, password) {
    const users = Storage.get('luxe_users', []);
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'Email already registered' };
    }
    const user = { id: Date.now(), name, email, password, createdAt: new Date().toISOString() };
    users.push(user);
    Storage.set('luxe_users', users);
    this.setSession(user);
    return { success: true, user };
  },

  login(email, password) {
    const users = Storage.get('luxe_users', []);
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { success: false, error: 'Invalid email or password' };
    this.setSession(user);
    return { success: true, user };
  },

  adminLogin(email, password) {
    if (email === 'admin@luxestore.com' && password === 'admin123') {
      const admin = { id: 0, name: 'Admin', email, role: 'admin' };
      Storage.set('luxe_session', admin);
      return { success: true, user: admin };
    }
    return { success: false, error: 'Invalid admin credentials' };
  },

  setSession(user) {
    const sessionUser = { ...user };
    delete sessionUser.password;
    Storage.set('luxe_session', sessionUser);
  },

  logout() {
    Storage.remove('luxe_session');
    window.location.href = 'login.html';
  },

  getSession() {
    return Storage.get('luxe_session');
  },

  isLoggedIn() {
    return !!this.getSession();
  },

  isAdmin() {
    const session = this.getSession();
    return session && session.role === 'admin';
  }
};

// ============================================================
// ORDERS SYSTEM
// ============================================================
const Orders = {
  getAll() {
    return Storage.get('luxe_orders', []);
  },

  create(orderData) {
    const orders = this.getAll();
    const order = {
      id: 'ORD-' + Date.now(),
      ...orderData,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    orders.push(order);
    Storage.set('luxe_orders', orders);
    return order;
  },

  updateStatus(id, status) {
    const orders = this.getAll();
    const order = orders.find(o => o.id === id);
    if (order) {
      order.status = status;
      Storage.set('luxe_orders', orders);
    }
  }
};

// ============================================================
// REVIEWS SYSTEM
// ============================================================
const Reviews = {
  getAll() {
    return Storage.get('luxe_reviews', []);
  },

  getForProduct(productId) {
    return this.getAll().filter(r => r.productId === productId);
  },

  add(review) {
    const reviews = this.getAll();
    const newReview = {
      id: Date.now(),
      ...review,
      createdAt: new Date().toISOString()
    };
    reviews.push(newReview);
    Storage.set('luxe_reviews', reviews);
    return newReview;
  }
};

// ============================================================
// PRODUCTS SYSTEM (admin can modify)
// ============================================================
const Products = {
  getAll() {
    return Storage.get('luxe_products', PRODUCTS_DATA);
  },

  getById(id) {
    return this.getAll().find(p => p.id === Number(id));
  },

  add(product) {
    const products = this.getAll();
    product.id = Date.now();
    products.push(product);
    Storage.set('luxe_products', products);
    return product;
  },

  update(id, data) {
    const products = this.getAll();
    const idx = products.findIndex(p => p.id === Number(id));
    if (idx !== -1) {
      products[idx] = { ...products[idx], ...data };
      Storage.set('luxe_products', products);
      return products[idx];
    }
    return null;
  },

  delete(id) {
    const products = this.getAll().filter(p => p.id !== Number(id));
    Storage.set('luxe_products', products);
  },

  search(query) {
    const q = query.toLowerCase();
    return this.getAll().filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.tags && p.tags.some(t => t.includes(q)))
    );
  },

  filter({ category, size, color, minPrice, maxPrice, sort } = {}) {
    let products = this.getAll();

    if (category && category !== 'All') {
      products = products.filter(p => p.category === category);
    }

    if (size) {
      products = products.filter(p => p.sizes && p.sizes.includes(size));
    }

    if (minPrice !== undefined) {
      products = products.filter(p => p.price >= minPrice);
    }

    if (maxPrice !== undefined) {
      products = products.filter(p => p.price <= maxPrice);
    }

    if (sort) {
      switch (sort) {
        case 'price-asc': products.sort((a, b) => a.price - b.price); break;
        case 'price-desc': products.sort((a, b) => b.price - a.price); break;
        case 'name-asc': products.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'newest': products.sort((a, b) => b.id - a.id); break;
        case 'rating': products.sort((a, b) => b.rating - a.rating); break;
      }
    }

    return products;
  }
};

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================
const Toast = {
  show(message, type = 'success', duration = 3500) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const icons = { success: '✓', error: '✕', info: 'ℹ', warning: '⚠' };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || '✓'}</span>
      <span class="toast-message">${message}</span>
      <button class="toast-close" onclick="this.parentElement.remove()">×</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastOut 0.4s ease forwards';
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }
};

// ============================================================
// UTILITY FUNCTIONS
// ============================================================
const Utils = {
  formatPrice(price) {
    return '$' + Number(price).toFixed(2);
  },

  formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  },

  truncate(str, n = 80) {
    return str.length > n ? str.slice(0, n) + '...' : str;
  },

  renderStars(rating, interactive = false) {
    let html = '<div class="stars">';
    for (let i = 1; i <= 5; i++) {
      const filled = i <= Math.round(rating);
      html += `<span class="star ${filled ? 'filled' : ''}" ${interactive ? `data-value="${i}"` : ''}>★</span>`;
    }
    html += '</div>';
    return html;
  },

  getColorStyle(hex) {
    const map = {
      '#1a1a1a': 'background: #1a1a1a; border-color: #444;',
      '#f5f0e8': 'background: #f5f0e8; border-color: #ccc;',
      '#722f37': 'background: #722f37;',
      '#c9a89a': 'background: #c9a89a;',
      '#4a3728': 'background: #4a3728;',
      '#2c3e50': 'background: #2c3e50;',
      '#8b7355': 'background: #8b7355;',
      '#e8e0d5': 'background: #e8e0d5; border-color: #ccc;',
      '#0a0a0a': 'background: #0a0a0a; border-color: #444;',
    };
    return map[hex] || `background: ${hex};`;
  },

  debounce(fn, delay = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  },

  getQueryParam(key) {
    return new URLSearchParams(window.location.search).get(key);
  }
};

// ============================================================
// PRODUCT CARD RENDERER
// ============================================================
function renderProductCard(product, extraClass = '') {
  const discountPct = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const badgeMap = { sale: 'SALE', new: 'NEW', featured: 'FEATURED' };
  const badge = product.badge;

  const colorDots = (product.colors || []).slice(0, 4).map((c, i) =>
    `<span class="color-dot" style="${Utils.getColorStyle(c)}" title="${(product.colorNames || [])[i] || c}"></span>`
  ).join('');

  return `
    <div class="product-card ${extraClass}" data-id="${product.id}" onclick="window.location.href='product.html?id=${product.id}'">
      <div class="product-image-wrap">
        ${badge ? `<div class="product-badge ${badge}">${badgeMap[badge]}</div>` : ''}
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80'">
        <div class="product-actions">
          <button class="btn btn-primary btn-sm flex-1" onclick="event.stopPropagation(); quickAddToCart(${product.id})">
            + Add to Cart
          </button>
          <button class="btn btn-dark btn-sm btn-icon" onclick="event.stopPropagation(); window.location.href='product.html?id=${product.id}'" title="View Details">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-price-row">
          <span class="product-price">${Utils.formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="product-price-old">${Utils.formatPrice(product.originalPrice)}</span>` : ''}
          ${discountPct ? `<span class="badge" style="background:rgba(231,76,60,0.12);color:#e74c3c;border-color:rgba(231,76,60,0.3)">-${discountPct}%</span>` : ''}
        </div>
        <div class="product-colors">${colorDots}</div>
      </div>
    </div>
  `;
}

// Quick add to cart (picks first size/color)
function quickAddToCart(productId) {
  const product = Products.getById(productId);
  if (!product) return;
  const size = product.sizes ? product.sizes[0] : 'M';
  const color = product.colors ? product.colors[0] : '#1a1a1a';
  const colorName = product.colorNames ? product.colorNames[0] : 'Default';
  Cart.addItem(product, size, color, colorName);
  Toast.show(`"${product.name}" added to cart!`);
}

// ============================================================
// NAVBAR SHARED LOGIC
// ============================================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Highlight active link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  Cart.updateBadge();
}

// ============================================================
// SEARCH OVERLAY
// ============================================================
function initSearch() {
  const overlay = document.getElementById('search-overlay');
  const input = document.getElementById('search-input');
  if (!overlay || !input) return;

  document.querySelectorAll('[data-open-search]').forEach(btn => {
    btn.addEventListener('click', () => {
      overlay.classList.add('open');
      setTimeout(() => input.focus(), 100);
    });
  });

  document.querySelector('.search-close')?.addEventListener('click', () => {
    overlay.classList.remove('open');
  });

  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') overlay.classList.remove('open');
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      overlay.classList.add('open');
      setTimeout(() => input.focus(), 100);
    }
  });

  document.getElementById('search-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const q = input.value.trim();
    if (q) window.location.href = `shop.html?search=${encodeURIComponent(q)}`;
  });
}

// ============================================================
// MOBILE MENU
// ============================================================
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  const close = document.querySelector('.mobile-close');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => menu.classList.add('open'));
  close?.addEventListener('click', () => menu.classList.remove('open'));
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}

// ============================================================
// CUSTOM CURSOR
// ============================================================
function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;

  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  if (!cursor || !follower) return;

  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  function animateFollower() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top = fy + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  document.querySelectorAll('a, button, [role="button"], .product-card, .category-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
      follower.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
      follower.classList.remove('active');
    });
  });
}

// ============================================================
// LOADING SCREEN
// ============================================================
function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      screen.classList.add('fade-out');
      setTimeout(() => screen.remove(), 600);
    }, 1200);
  });
}

// ============================================================
// MARQUEE DUPLICATION
// ============================================================
function initMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  track.innerHTML += track.innerHTML;
}

// ============================================================
// INIT ALL SHARED
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSearch();
  initMobileMenu();
  initScrollReveal();
  initCursor();
  initLoadingScreen();
  initMarquee();
});
