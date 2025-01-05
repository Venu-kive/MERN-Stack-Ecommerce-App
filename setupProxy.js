const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mern-stack-ecommerce-app-backend.onrender.com',
      changeOrigin: true,
    })
  );
};
