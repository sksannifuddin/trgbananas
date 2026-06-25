# 🍌 TRG Bananas — Setup Guide for Mac

---

## ✅ Step 1 — Install Node.js (if not installed)

1. Go to: **https://nodejs.org**
2. Click the big **"LTS"** button to download
3. Open the downloaded file and install it
4. Done! ✅

---

## ✅ Step 2 — Install MongoDB (choose ONE option)

### Option A — Install on your Mac (Recommended for beginners):
Open **Terminal** (search "Terminal" in Spotlight) and run:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Option B — Use MongoDB Atlas FREE Cloud (No install needed):
1. Go to: https://www.mongodb.com/atlas
2. Sign up for free
3. Create a free cluster
4. Copy your connection string
5. Open `backend/.env` and replace `MONGODB_URI=` with your Atlas URI

---

## ✅ Step 3 — Start the Server

**Easy way (double-click):**
1. Open the `trg-bananas` folder in Finder
2. Right-click on `START-SERVER.command`
3. Click **"Open"**
4. Click **"Open"** again on the warning popup
5. Terminal opens and server starts! ✅

**OR via Terminal:**
```bash
cd path/to/trg-bananas/backend
npm install
npm start
```

---

## ✅ Step 4 — Open the Website

1. Go into the `frontend` folder
2. Double-click `index.html` — it opens in your browser! 🍌

---

## ✅ Step 5 — Open Admin Panel

1. Go into the `admin` folder
2. Double-click `index.html`
3. Login with:
   - **Email:** admin@trgbananas.com
   - **Password:** Admin@123

---

## 🖼️ Add Your Banana Images

Copy your 4 photos into `frontend/images/`:
- `cavendish.jpg`
- `organic.jpg`
- `bulk-box.jpg`
- `premium.jpg`

---

## ❓ Troubleshooting

**"Cannot connect to server" error on website:**
→ Make sure the backend server is running (Step 3)
→ The website still works in demo mode without backend

**MongoDB connection error:**
→ Run: `brew services start mongodb-community`
→ OR use MongoDB Atlas (Option B above)

**"Permission denied" on START-SERVER.command:**
→ Open Terminal and run:
```bash
chmod +x /path/to/trg-bananas/START-SERVER.command
```

---

## 📁 Project Structure
```
trg-bananas/
├── frontend/           ← Customer website (open index.html)
│   ├── index.html
│   └── images/         ← Put your 4 banana images here
├── backend/            ← API server
│   ├── server.js
│   ├── .env            ← Config (port, database, admin login)
│   ├── models/
│   ├── routes/
│   └── middleware/
├── admin/              ← Admin dashboard (open index.html)
│   └── index.html
├── START-SERVER.command ← Double-click to start (Mac)
└── README-MAC.md        ← This file
```
