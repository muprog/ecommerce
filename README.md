# 🛒 E-Commerce Platform

A full-stack e-commerce platform built with React.js frontend and Node.js backend, featuring multi-user roles, product management, payment processing, and internationalization support.

## ✨ Features

### 🔐 Authentication & User Management

- **Multi-User Roles**: Admin, Seller, Buyer, and Product Adder
- **Secure Authentication**: JWT-based authentication with bcrypt password hashing
- **Password Recovery**: OTP-based password reset system
- **User Status Management**: Active/Inactive user status control

### 🛍️ Product Management

- **Product CRUD Operations**: Create, Read, Update, Delete products
- **Category & Type System**: Organized product classification
- **Image Upload**: Multer-based image handling
- **Product Status**: Available, Sold, Out of Stock management
- **Search & Filtering**: Advanced product search capabilities

### 🛒 Shopping Experience

- **Shopping Cart**: Persistent cart with quantity management
- **Favorites**: Wishlist functionality for buyers
- **Product Details**: Comprehensive product information display
- **Responsive Design**: Mobile-first responsive UI

### 💳 Payment & Transactions

- **Stripe Integration**: Secure payment processing
- **Order Management**: Complete order lifecycle tracking
- **Delivery Status**: Real-time delivery updates
- **Transaction History**: Detailed payment records

### 🌐 Internationalization

- **Multi-Language Support**: English, Amharic, German, Spanish, French
- **Localized Content**: Language-specific user experience
- **Dynamic Language Switching**: Real-time language changes

### 📊 Admin Dashboard

- **User Management**: Admin control over all users
- **Product Oversight**: Monitor and manage all products
- **Analytics**: Sales and user statistics
- **System Administration**: Platform configuration

### 📱 User Experience

- **Responsive Design**: Works on all device sizes
- **Modern UI**: Bootstrap and custom CSS styling
- **Toast Notifications**: User feedback with react-hot-toast
- **Smooth Navigation**: React Router for seamless page transitions

## 🏗️ Project Structure

```
ecommerce/
├── client/                 # React.js Frontend
│   ├── src/
│   │   ├── Component/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── style/         # CSS stylesheets
│   │   ├── image/         # Static images
│   │   ├── locales/       # Internationalization files
│   │   └── App.js         # Main application component
│   ├── public/            # Public assets
│   └── package.json       # Frontend dependencies
├── server/                # Node.js Backend
│   ├── Controller/        # Business logic controllers
│   ├── model/            # MongoDB data models
│   ├── Routes/           # API route definitions
│   ├── index.js          # Server entry point
│   └── package.json      # Backend dependencies
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ecommerce
   ```

2. **Install backend dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**

   Create `.env` file in the server directory:

   ```env
   MONGO_URL=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   ```

   Create `.env` file in the client directory:

   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

5. **Start the backend server**

   ```bash
   cd server
   npm start
   ```

6. **Start the frontend application**
   ```bash
   cd client
   npm start
   ```

The application will be available at:

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 🔑 Default User Accounts

### Admin Access

- **Email**: amarenibret292@gmail.com
- **Password**: 123456

### Seller Account

- **Email**: muprog4@gmail.com
- **Password**: Adoni1

### Buyer Account

- **Email**: adoniseid940@gmail.com
- **Password**: Adoniyas1

### Product Adder

- **Email**: telaynew11@gmail.com
- **Password**: Telaynew1

## 🛠️ Technologies Used

### Frontend

- **React.js 18.3.1** - Modern React with hooks
- **React Router 6** - Client-side routing
- **Bootstrap 5.3.3** - Responsive UI framework
- **Axios** - HTTP client for API calls
- **i18next** - Internationalization framework
- **Chart.js** - Data visualization
- **Swiper** - Touch slider component
- **React Hot Toast** - Notification system

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcrypt** - Password hashing
- **Multer** - File upload handling
- **Stripe** - Payment processing
- **Nodemailer** - Email functionality
- **OTP Generator** - One-time password generation

### Development Tools

- **ESLint** - Code linting
- **Babel** - JavaScript compiler
- **Webpack** - Module bundler

## 📱 Key Components

### User Management

- `UserContext.js` - Global user state management
- `Header.js` - Navigation and user controls
- `Login.js` / `Register.js` - Authentication forms

### Product System

- `ProductStructure.js` - Product display components
- `CreateProduct.js` - Product creation interface
- `ProductDetail.js` - Detailed product view

### Shopping Features

- `Cart.js` - Shopping cart functionality
- `Favorite.js` - Wishlist management
- `Payment.js` - Checkout and payment

### Admin Features

- `Admin.js` - Administrative dashboard
- `UserStatus.js` - User management interface

## 🌍 Internationalization

The platform supports multiple languages:

- **English (en)** - Default language
- **Amharic (am)** - Ethiopian language
- **German (de)** - German language
- **Spanish (es)** - Spanish language
- **French (fr)** - French language

Language files are located in `client/src/locales/` and can be easily extended.

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - bcrypt encryption for user passwords
- **CORS Protection** - Cross-origin resource sharing security
- **Input Validation** - Server-side data validation
- **Secure Headers** - HTTP security headers

## 📊 Database Models

### User Model

- Personal information (name, email, phone)
- User type classification
- Account status and OTP management

### Product Model

- Product details (name, description, price)
- Category and type classification
- Inventory management (quantity, status)
- Owner and creation tracking

### Additional Models

- **Payment** - Transaction records
- **Feedback** - User reviews and ratings
- **Favorite** - User wishlists
- **Balance** - Financial account management

## 🚀 Deployment

### Frontend Deployment

```bash
cd client
npm run build
```

The build folder contains optimized production files.

### Backend Deployment

- Ensure MongoDB connection is configured
- Set up environment variables
- Use PM2 or similar process manager for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Support

For support and questions:

- Check the Help Center within the application
- Review the documentation
- Contact the development team

## 🔮 Future Enhancements

- **Real-time Chat** - Buyer-seller communication
- **Advanced Analytics** - Detailed business insights
- **Mobile App** - Native mobile application
- **AI Recommendations** - Smart product suggestions
- **Multi-currency Support** - International payment options

---

**Built with ❤️ using modern web technologies**
