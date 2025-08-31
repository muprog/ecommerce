# Client Setup Guide

## Environment Variables

Create a `.env` file in the client directory with the following variables:

```env
# Development
REACT_APP_API_URL=http://localhost:5000

# Production (update with your actual backend URL)
# REACT_APP_API_URL=https://your-backend-app.onrender.com
```

## Production Deployment (Vercel)

When deploying to Vercel, make sure to:

1. **Set Environment Variables** in Vercel dashboard:

   - `REACT_APP_API_URL`: Your Render backend URL (e.g., https://your-app.onrender.com)

2. **Build Settings**:

   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

3. **Important Notes**:
   - All environment variables must start with `REACT_APP_` to be accessible in the React app
   - The backend URL must be accessible from Vercel's servers
   - Ensure CORS is properly configured on your backend

## Development

```bash
cd client
npm install
npm start
```

The application will be available at http://localhost:3000
