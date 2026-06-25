const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/images', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/admin', require('./routes/admin'));

// Serve frontend
app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/admin', express.static(path.join(__dirname, '../admin')));

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'TRG Bananas API running 🍌' }));

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('✅ MongoDB connected');
    // Seed admin user if not exists
    const User = require('./models/User');
    const bcrypt = require('bcryptjs');
    const adminExists = await User.findOne({ role: 'admin' });
    if (!adminExists) {
      await User.create({
        name: 'TRG Admin',
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
        role: 'admin'
      });
      console.log('✅ Admin user created:', process.env.ADMIN_EMAIL);
    }
    // Seed sample products if none exist
    const Product = require('./models/Product');
    const count = await Product.countDocuments();
    if (count === 0) {
      await Product.insertMany([
        { name: 'Cavendish Bananas', description: 'Fresh premium Cavendish bananas, perfect sweetness and texture', price: 60, originalPrice: 80, category: 'fresh', image: 'cavendish.jpg', stock: 200, isFeatured: true, rating: 4.8, reviewCount: 124, tags: ['fresh', 'popular'] },
        { name: 'Organic Banana Bundle', description: 'Certified organic bananas, grown without pesticides', price: 90, originalPrice: 110, category: 'organic', image: 'organic.jpg', stock: 80, isFeatured: true, rating: 4.9, reviewCount: 87, tags: ['organic', 'healthy'] },
        { name: 'Bulk Market Box', description: 'Wholesale banana box for businesses and families — 10kg box', price: 450, originalPrice: 550, category: 'bulk', image: 'bulk-box.jpg', stock: 50, isFeatured: true, rating: 4.7, reviewCount: 43, unit: 'box', tags: ['bulk', 'wholesale'] },
        { name: 'Premium Bananas', description: 'Hand-selected premium grade bananas from the finest farms', price: 120, originalPrice: 150, category: 'premium', image: 'premium.jpg', stock: 60, isFeatured: true, rating: 5.0, reviewCount: 32, tags: ['premium', 'gift'] }
      ]);
      console.log('✅ Sample products seeded');
    }
    app.listen(process.env.PORT, () => console.log(`🍌 TRG Bananas server running on port ${process.env.PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
