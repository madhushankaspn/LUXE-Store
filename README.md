# LUXE STORE — Elevated Fashion E-Commerce

> A full-featured luxury fashion e-commerce website built with pure HTML, CSS, and JavaScript. No frameworks. No build tools. Just clean, production-ready front-end code.

---

## 📸 Preview





<img width="1892" height="913" alt="image" src="https://github.com/user-attachments/assets/0e96e9bf-36f1-4444-b855-19789e24b9e4" />


## ✨ Features

- 🖤 Dark luxury aesthetic with gold accents
- 🛍️ Full shopping cart with promo code support
- 🔐 User authentication (register / login / admin)
- 📦 Order placement and status tracking
- ⭐ Product reviews and community feedback
- 🔍 Search, filter, and sort products
- 📱 Fully responsive across all screen sizes
- ✨ Custom cursor, scroll reveal animations, loading screen
- 🛠️ Admin dashboard with full product and order management
- 💾 LocalStorage-based backend — no server required

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox) |
| Logic | Vanilla JavaScript (ES6+) |
| Storage | Browser LocalStorage |
| Fonts | Google Fonts (Playfair Display, Montserrat, Cormorant Garamond) |
| Images | Unsplash (via URL) |

---

## 📁 Folder Structure

```
LUXE-Store/
├── index.html          # Home page
├── shop.html           # Browse & filter products
├── product.html        # Product detail page
├── cart.html           # Shopping cart
├── checkout.html       # 3-step checkout
├── login.html          # Login & register
├── admin.html          # Admin dashboard
├── contact.html        # Contact form & FAQ
├── feedback.html       # Community reviews
│
├── css/
│   ├── style.css       # Global styles, navbar, animations
│   ├── home.css        # Home page styles
│   ├── shop.css        # Shop, product, cart, checkout styles
│   └── pages.css       # Auth, admin, contact, feedback styles
│
├── js/
│   └── core.js         # All data, utilities & shared logic
│
└── images/
    └── logo.png        # Store logo
```

---

## 🚀 How to Run Locally

This project uses plain HTML files and must be served through a local web server (not opened directly as `file://`) to avoid browser security restrictions.

### Option 1 — VS Code Live Server _(Recommended)_

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code
2. Open the `LUXE-Store` folder in VS Code
3. Right-click `index.html` → **Open with Live Server**
4. Visit `http://127.0.0.1:5500`

### Option 2 — Python

```bash
cd LUXE-Store
python -m http.server 8000
```
Visit `http://localhost:8000`

### Option 3 — Node.js

```bash
cd LUXE-Store
npx serve .
```
Visit the URL shown in the terminal.

---

## 🔐 Admin Access

The admin dashboard is accessible at `/admin.html` after signing in with admin credentials.

| Field | Value |
|-------|-------|
| Email | `admin@luxestore.com` |
| Password | `admin123` |

### Admin Capabilities

- **Products** — Add, edit, and delete products
- **Orders** — View all orders and update their status
- **Customers** — View registered user accounts
- **Reviews** — Monitor all submitted product reviews

> ⚠️ If the admin page redirects you to login, clear the session first by running this in the browser console:
> ```javascript
> localStorage.removeItem('luxe_session');
> location.href = 'login.html';
> ```

---

## 🛒 Promo Codes

Apply these codes at checkout for discounts:

| Code | Discount |
|------|----------|
| `LUXE10` | 10% off |
| `LUXE20` | 20% off |
| `WELCOME` | 15% off |

---

## 📄 Pages

| Page | Description |
|------|-------------|
| `index.html` | Hero, featured products, categories, testimonials |
| `shop.html` | Product grid with filters, search, and sorting |
| `product.html` | Product gallery, size/color picker, reviews |
| `cart.html` | Cart items, promo codes, order summary |
| `checkout.html` | 3-step flow: Info → Shipping → Payment |
| `login.html` | Sign in and create account |
| `admin.html` | Full store management dashboard |
| `contact.html` | Contact form and FAQ accordion |
| `feedback.html` | Community reviews with ratings and filters |

---

## 📝 Notes

- All data is stored in **browser LocalStorage** — clearing browser data will reset the store
- Product images use **Unsplash URLs** and require an internet connection to load
- The site works best when served over **localhost** rather than opened as a local file

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ♥ by the LUXE team
</p>
