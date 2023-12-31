const nextConfig = {
  env: {
     "BASE_URL": process.env.NODE_ENV==='production'? "https://getartist.vercel.app": "http://localhost:3000",
     "MONGODB_URL": process.env.MONGODB_URL,
     "SENDER_EMAIL": process.env.SENDER_EMAIL,
     "SENDER_EMAIL_PASSWORD": process.env.SENDER_EMAIL_PASSWORD,
     "EMAIL_SERVICE": process.env.EMAIL_SERVICE,
     "EMAIL_PORT": process.env.EMAIL_PORT,
     "ACCESS_TOKEN_SECRET": process.env.ACCESS_TOKEN_SECRET,
     "REFRESH_TOKEN_SECRET": process.env.REFRESH_TOKEN_SECRET,
     "CLOUD_NAME": process.env.CLOUD_NAME,
     "CLOUD_API": process.env.CLOUD_API,
     "CLOUD_UPDATE_PRESET": process.env.CLOUD_UPDATE_PRESET,
     "UNSPLASH_ACCESS_KEY": process.env.UNSPLASH_ACCESS_KEY,
  },
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig