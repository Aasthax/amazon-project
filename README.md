# 🚀 Amazon-Style E-Commerce Frontend (Vanilla JS)

---

## 📌 Project Overview

This project is a **fully functional Amazon-style e-commerce frontend application** built using **HTML, CSS, and Vanilla JavaScript**.

It simulates a real-world shopping workflow including:

- Product browsing  
- Smart search filtering  
- Cart management  
- Checkout flow  
- Order placement  
- Order history tracking  

The project integrates with a **mock backend API** and uses **localStorage for persistent cart state**, mimicking real production architecture patterns.

---

🌐 **Live Deployment:**  
https://aasthax2103.github.io/cart-checkout-project-javascript/components/amazon.html

---

## ⭐ Key Features

---

### 🛍 Product Browsing
- Dynamic product loading using **Fetch API**
- Object-Oriented **Product Models**
- Product rating, pricing, and variation support

---

### 🔎 Smart Search System
- URL-based search query system  
- Case-insensitive search  

Supports:
- Product name search  
- Keyword-based search matching  

Example:
```
amazon.html?search=socks
```

---

### 🛒 Cart System
- Add to Cart with quantity selection  
- Real-time cart size updates  
- Persistent cart using **localStorage**  
- Quantity editing inside checkout page  
- Delivery option selection per product  

---

### 📦 Checkout System
Dynamic order summary calculation:

- Product cost  
- Shipping cost  
- Tax calculation  

Other Features:
- Backend **Order POST request simulation**
- Cart auto-clear after order placement  

---

### 📜 Orders History Page
Fetches and renders past orders with:

- Order Date  
- Order ID  
- Total Cost  
- Product List  
- Delivery Dates  
- **Buy Again** functionality (restores quantity)

---

## 🧠 Technical Concepts Demonstrated

### JavaScript
- ES Modules  
- Async / Await  
- Fetch API  
- Event Delegation  
- DOM Manipulation  
- URLSearchParams  

---

### 🏗 Architecture

**Separation of Concerns**

```
Data Layer → UI Rendering → API Layer
```

Includes:
- Data Layer → `cart.js`, `products.js`, `orders.js`
- UI Rendering Layer → DOM Rendering Modules
- Service Layer → API Calls

---

### 💾 Storage & State Management
- localStorage Cart Persistence  
- URL Query State Synchronization  
- Backend + Frontend State Coordination  

---

## 🌐 Backend Integration

Uses mock backend APIs:

```
GET  https://supersimplebackend.dev/products
POST https://supersimplebackend.dev/orders
```

---

## 🛠 Tech Stack

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- DayJS (Date Formatting)  
- LocalStorage  
- REST APIs  

---

## 📂 Project Structure

```
/data
  cart.js
  products.js
  orders.js
  deliveryOptions.js

/scripts
  amazon.js
  checkout.js
  orderSummary.js
  paymentSummary.js
  buy.js
  header.js

/pages
  amazon.html
  checkout.html
  orders.html
```

---

## 💡 What Makes This Project Stand Out

✅ Built using **Pure Vanilla JavaScript (No Frameworks)**  
✅ Production-like **State Management**  
✅ Realistic **E-commerce Workflow Simulation**  
✅ Modular & Scalable Architecture  
✅ URL-driven UI State  
✅ Advanced Search Logic (Name + Keyword Matching)  

---

## 📈 Future Improvements

- User Authentication  
- Real Payment Gateway Integration  
- Inventory Management  
- Admin Dashboard  
- Order Tracking Timeline UI  
- Backend Database Integration  

---

## 👩‍💻 Author

**Aastha Garg**  
B.Tech CSE  
Frontend & Software Development Enthusiast
