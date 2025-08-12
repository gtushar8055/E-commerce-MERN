# 🛒 GadgetHub - Modern E-commerce Platform

A full-stack e-commerce web application built with the MERN stack, offering a seamless shopping experience for tech enthusiasts. GadgetHub provides a comprehensive platform for browsing, purchasing, and managing electronic gadgets with modern web technologies.


## ✨ Key Features

### 🛍️ Customer Features
- **User Authentication** - Secure login and registration system
- **Product Browsing** - Comprehensive collection page with category organization
- **Advanced Search** - Filter products by category and subcategory
- **Search Functionality** - Real-time product search 
- **Product Details** - Detailed product view with high-quality images
- **Customer Reviews** - Read product reviews
- **Recommendations** - Similar product suggestions
- **Shopping Cart** - Add, remove, and manage cart items
- **Order Management** - Place orders with order tracking
- **Payment Options** - Cash on Delivery (COD) and Stripe payment gateway
- **Company Information** - About us and contact pages

### 🔧 Admin Features
- **Product Management** - Add, edit, and delete products
- **Inventory Control** - Manage product listings and stock
- **Order Processing** - Handle customer orders and status updates

### 🌟 Special Features
- **Stripe Integration** - Mock payment gateway for secure transactions
- **Responsive Design** - Mobile-first approach for all devices
- **Real-time Updates** - Dynamic cart and order status updates

## 🚀 Technology Stack

### Frontend
- **React.js** - Modern JavaScript library for building user interfaces
- **CSS3** - Custom styling with responsive design
- **JavaScript ES6+** - Modern JavaScript features
- **Tailwind CSS** - For Designing and Color Combination

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast and minimalist web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - MongoDB object modeling for Node.js


## 📱 Some ScreenShots

### Homepage
<img width="1919" height="922" alt="Screenshot 2025-08-12 110805" src="https://github.com/user-attachments/assets/c292725d-49de-431f-834a-73837d719b5b" />


### Product Collection
<img width="1919" height="914" alt="Screenshot 2025-08-12 212343" src="https://github.com/user-attachments/assets/a949daf2-317c-430a-b34d-86cc882cb519" />
<img width="1919" height="914" alt="Screenshot 2025-08-12 212411" src="https://github.com/user-attachments/assets/ba90b0f4-b8a4-4a53-acf0-c35ca19e49ec" />


### Product Details
<img width="1918" height="918" alt="Screenshot 2025-08-12 212513" src="https://github.com/user-attachments/assets/1ce9d636-535b-4250-aea9-a0dc0aa3908e" />


### Shopping Cart
<img width="1919" height="919" alt="Screenshot 2025-08-12 212727" src="https://github.com/user-attachments/assets/08364218-7233-4fc7-8926-6a1513537fca" />


### Admin Dashboard
<img width="1897" height="915" alt="Screenshot 2025-08-12 212901" src="https://github.com/user-attachments/assets/66b71746-14d2-4462-beb0-30ff0bcfaef1" />
<img width="1898" height="915" alt="Screenshot 2025-08-12 212919" src="https://github.com/user-attachments/assets/9366a3c4-3b11-4667-bb6c-d4357c07bc0b" />

### Order Management
<img width="1898" height="917" alt="Screenshot 2025-08-12 212952" src="https://github.com/user-attachments/assets/edd0f4d7-c47d-46f2-b28d-6aa1ac23c746" />

### Payment & Services
- **Stripe** - Payment processing platform
- **Vercel** - Deployment and hosting platform

  

## 🌐 Live Demo

**🔗 [Visit GadgetHub](https://gadgethub-frontend.vercel.app/)**
**🔗 [Video Demo](https://www.linkedin.com/posts/tushar-gupta-546790296_mern-mongodb-expressjs-activity-7360756243990265857-MG1C?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEepkAYBTZR1SqEdsGdOWU41a1YJDTGIPVU)**



## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14.0 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas)
- **Git** for version control



## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/gtushar8055/E-commerce-MERN.git
cd E-commerce-MERN
```

### 2. Install Dependencies

**Install Backend Dependencies:**
```bash
cd backend
npm install
```

**Install Frontend Dependencies:**
```bash
cd ../frontend
npm install
```

**Install Admin Dependencies:**
```bash
cd ../admin
npm install
```

### 3. Environment Setup
Create `.env` files in the respective directories

### 4. Database Setup

1. Create a MongoDB database (local or Atlas)
2. Update the connection string in your backend `.env` file
3. The application will automatically create necessary collections

### 5. Run the Application

**Start Backend Server:**
```bash
cd backend
npm run server
```

**Start Frontend Application:**
```bash
cd frontend
npm run dev
```

**Start Admin Panel:**
```bash
cd admin
npm run dev
```

The applications will be available at:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:4000
- **Admin Panel:** http://localhost:5174

## 📁 Project Structure

```
E-commerce-MERN/
├── admin/                          # Admin panel application
│   ├── node_modules/              # Admin dependencies
│   ├── public/                    # Static admin files
│   ├── src/                       # Admin source code
│   │   ├── assets/                # Admin images and resources
│   │   ├── components/            # Reusable admin components
│   │   └── pages/                 # Admin page components
│   ├── App.jsx                    # Main admin app component
│   ├── index.css                  # Admin global styles
│   ├── main.jsx                   # Admin app entry point
│   ├── .env                       # Admin environment variables
│   ├── .gitignore                 # Git ignore for admin
│   ├── eslint.config.js           # ESLint configuration
│   ├── index.html                 # Admin HTML template
│   ├── package-lock.json          # Admin dependency lock
│   ├── package.json               # Admin dependencies & scripts
│   ├── postcss.config.js          # PostCSS configuration
│   ├── README.md                  # Admin documentation
│   ├── tailwind.config.js         # Tailwind CSS config
│   ├── vercel.json                # Vercel deployment config
│   └── vite.config.js             # Vite build configuration
│
├── backend/                       # Node.js/Express.js API server
│   ├── config/                    # Database and app configuration
│   ├── controllers/               # Route controller logic
│   ├── middleware/                # Custom middleware functions
│   ├── models/                    # MongoDB data models
│   ├── node_modules/              # Backend dependencies
│   ├── routes/                    # API endpoint definitions
│   ├── .env                       # Backend environment variables
│   ├── package-lock.json          # Backend dependency lock
│   └── package.json               # Backend dependencies & scripts
│   └── server.js                  # Main server entry point
│   └── vercel.json                # Root Vercel configuration
│
├── frontend/                      # React.js customer-facing app
│   ├── node_modules/              # Frontend dependencies
│   ├── public/                    # Static frontend files
│   ├── src/                       # Frontend source code
│   │   ├── assets/                # Images, fonts, and resources
│   │   ├── components/            # Reusable UI components
│   │   ├── context/               # React context for state management
│   │   └── pages/                 # Application page components
│   ├── App.jsx                    # Main app component
│   ├── index.css                  # Global CSS styles
│   ├── main.jsx                   # App entry point
│   ├── .env                       # Frontend environment variables
│   ├── .gitignore                 # Git ignore rules
│   ├── eslint.config.js           # ESLint configuration
│   ├── index.html                 # HTML template
│   ├── package-lock.json          # Frontend dependency lock
│   ├── package.json               # Frontend dependencies & scripts
│   ├── postcss.config.js          # PostCSS configuration
│   ├── README.md                  # Frontend documentation
│   ├── tailwind.config.js         # Tailwind CSS configuration
│   ├── vercel.json                # Vercel deployment settings
│   ├── vite.config.js             # Vite build tool config
│   └── .gitignore                 # Additional git ignore

```

## 💳 Payment Integration

The application integrates with **Stripe** for secure payment processing:

1. **Test Mode:** Uses Stripe's test environment for development
2. **Payment Methods:** Supports credit/debit cards and digital wallets
3. **Security:** PCI-compliant payment processing
4. **Fallback:** Cash on Delivery (COD) option available

### Test Card Details
- **Card Number:** 4242 4242 4242 4242
- **Expiry:** Any future date
- **CVC:** Any 3-digit number

## 🚀 Deployment

The application is deployed on vercel and accessible at link below :
- **GadgetHub:** [https://gadgethub-frontend.vercel.app/](https://gadgethub-frontend.vercel.app/)


## 📞 Contact

**Developer:** Tushar Gupta  
**Email:** tushargupta12312021@gmail.com  
**GitHub:** [@gtushar8055](https://github.com/gtushar8055)  

---

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub!

**Made with ❤️ by Tushar Gupta**
