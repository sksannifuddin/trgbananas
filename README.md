# 🍌 TRG Bananas — Full Stack Delivery Website

## What's Included
- **Frontend** — Beautiful animated banana delivery website
- **Backend** — Node.js + Express REST API
- **Admin Panel** — Full management dashboard
- **Database** — MongoDB with auto-seeded products & admin

---

## 📁 Project Structure
```
trg-bananas/
├── frontend/          ← Customer website
│   ├── index.html
│   └── images/        ← Put your 4 banana images here
├── backend/           ← Node.js API server
│   ├── server.js
│   ├── .env
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── uploads/       ← Product image uploads
└── admin/             ← Admin panel
    └── index.html
```

---

## 🚀 HOW TO RUN (Step by Step)

### Step 1 — Install Node.js
Download and install from: https://nodejs.org (LTS version)

### Step 2 — Install MongoDB
Download from: https://www.mongodb.com/try/download/community
OR use MongoDB Atlas (free cloud): https://www.mongodb.com/atlas

### Step 3 — Setup Backend
Open terminal / command prompt:
```bash
cd trg-bananas/backend
npm install
npm start
```
You should see:
```
✅ MongoDB connected
✅ Admin user created: admin@trgbananas.com
✅ Sample products seeded
🍌 TRG Bananas server running on port 5000
```

### Step 4 — Open Frontend
Just open `frontend/index.html` in your browser.
(Double-click the file OR drag into Chrome/Firefox)

### Step 5 — Open Admin Panel
Just open `admin/index.html` in your browser.

---

## 🔑 Default Admin Login
- **Email:** admin@trgbananas.com
- **Password:** Admin@123

---

## 🖼️ Adding Your Banana Images
Put these 4 image files inside the `frontend/images/` folder:
- `cavendish.jpg`
- `organic.jpg`
- `bulk-box.jpg`
- `premium.jpg`

---

## ⚙️ Configuration (.env file)
Edit `backend/.env` to change settings:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/trg_bananas
JWT_SECRET=your_secret_key_here
ADMIN_EMAIL=admin@trgbananas.com
ADMIN_PASSWORD=Admin@123
```

For MongoDB Atlas (cloud), replace MONGODB_URI with your Atlas connection string.

---

## 🌟 Features

### Customer Website
- Animated cinematic preloader
- Hero section with floating animations
- Product listing with category filters
- Add to cart & quantity management
- User registration & login
- Checkout with address form
- Order placement (COD / UPI / Online)

### Admin Panel
- Dashboard with live stats (orders, revenue, customers, products)
- Order management — view details, update status
- Product management — add, edit, delete products
- Customer management — view & activate/deactivate users

### Backend API
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login |
| GET | /api/products | Get all products |
| POST | /api/products | Add product (admin) |
| PUT | /api/products/:id | Update product (admin) |
| DELETE | /api/products/:id | Delete product (admin) |
| POST | /api/orders | Place order |
| GET | /api/orders/my | My orders |
| GET | /api/orders | All orders (admin) |
| PUT | /api/orders/:id/status | Update order status (admin) |
| GET | /api/admin/stats | Dashboard stats |
| GET | /api/admin/users | All customers |

---

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Auth:** JWT (JSON Web Tokens)
- **Password:** bcryptjs encryption

---

## 📞 Support
For help setting up, contact TRG Bananas support.
