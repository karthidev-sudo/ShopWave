# MERN Stack E-commerce

A full-stack e-commerce web application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## 🚀 Tech Stack

| Layer      | Technology |
|------------|------------|
| Frontend   | React.js   |
| Backend    | Node.js, Express.js |
| Database   | MongoDB    |
| Language   | JavaScript |

## 🔧 Features

- User registration & login (authentication / authorization)  
- Product listing: Add / view products (admin & user roles)  
- Shopping cart: Add items, manage cart  
- Order placement / checkout  
- (Optional) Admin dashboard for product & order management  

## 📁 Project Structure

/backend — server, API routes
/frontend — React client app
.gitignore
package.json / package-lock.json


## 🛠️ Setup & Installation

1. Clone the repository  
```bash
git clone https://github.com/karthidev-sudo/mern-stack-ecommerce.git
cd mern-stack-ecommerce

    Install dependencies

# for backend
cd backend
npm install

# for frontend
cd ../frontend
npm install

    Create environment variables
    Create a .env file (in backend) with required variables (e.g. MONGO_URI, JWT_SECRET, etc.)

    Run the application

# From root (or as per your scripts)
npm run dev

✅ Usage

    Register as a user or admin

    Browse product listings (frontend)

    Add products (if admin)

    Add items to cart, checkout and place orders

📝 Notes / TODOs

    Implement user authentication (JWT or session-based)

    Add payment gateway integration (Stripe / Razorpay)

    Add image upload support (e.g. using Cloudinary or multer)

    Add order history / profile / admin dashboard

    Improve UI/UX and add validations
