# Server Setup Guide

## Environment Variables

Create a `.env` file in the server directory with the following variables:

```env
# MongoDB Connection
MONGO_URL=mongodb://localhost:27017/your_database_name

# Server Configuration
PORT=5000
NODE_ENV=production

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here

# Stripe Configuration
STRIPE_SECRET_KEY=your_stripe_secret_key_here

# Email Configuration (Gmail)
EMAIL_USER=your_email@gmail.com
EMAIL_PWD=your_app_password_here

# Frontend URL (for CORS)
# Development
FRONTEND_URL=http://localhost:3000

# Production (update these with your actual deployed URLs)
# FRONTEND_URL=https://your-frontend-domain.vercel.app
```

## Production Deployment (Render)

When deploying to Render, make sure to:

1. **Set Environment Variables** in Render dashboard:

   - `FRONTEND_URL`: Your Vercel frontend URL (e.g., https://your-app.vercel.app)
   - `MONGO_URL`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: A strong secret key
   - `EMAIL_USER` and `EMAIL_PWD`: Your email credentials

2. **Update CORS Origins** in the code to match your deployed frontend URL

## Email Setup (Gmail)

To use Gmail for sending OTP emails:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:

   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password in `EMAIL_PWD`

3. **Use your Gmail address** in `EMAIL_USER`

## Important Notes

- The `EMAIL_PWD` should be an App Password, not your regular Gmail password
- Make sure MongoDB is running and accessible
- The server will use the email credentials to send OTP codes for password reset and registration
- In production, ensure your frontend URL is correctly set in the environment variables
