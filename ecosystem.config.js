module.exports = {
  apps: [
    {
      name: "mern-backend",
      script: "server.js",
      cwd: "/var/www/html/backend",
      env: {
        NODE_ENV: "production",
        PORT: 5000,
        MONGO_URI: process.env.MONGO_URI,
      },
    },
  ],
};
