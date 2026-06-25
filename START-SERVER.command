#!/bin/bash

# =============================================
#   🍌 TRG BANANAS - Start Backend Server
# =============================================

# Go to the folder where this script lives
cd "$(dirname "$0")/backend"

echo ""
echo "🍌 TRG BANANAS SERVER STARTING..."
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
  echo "❌ Node.js is NOT installed!"
  echo ""
  echo "👉 Please install it from: https://nodejs.org"
  echo "   Download the LTS version and install it."
  echo ""
  read -p "Press Enter to exit..."
  exit 1
fi

echo "✅ Node.js found: $(node -v)"

# Check if MongoDB is running
if ! pgrep -x "mongod" > /dev/null; then
  echo ""
  echo "⚠️  MongoDB is not running locally."
  echo "   Trying to start it..."
  brew services start mongodb-community 2>/dev/null || true
  sleep 2
fi

# Install dependencies if node_modules missing
if [ ! -d "node_modules" ]; then
  echo ""
  echo "📦 Installing packages (first time only, please wait)..."
  npm install
fi

echo ""
echo "======================================"
echo "✅ Server starting on port 4000"
echo "🌐 Website:  open frontend/index.html"
echo "🔧 Admin:    open admin/index.html"
echo "🔑 Login:    admin@trgbananas.com / Admin@123"
echo "======================================"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm start
