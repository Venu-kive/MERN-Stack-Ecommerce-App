const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mern-stack-ecommerce-app-xe26.onrender.com',
      changeOrigin: true,
    })
  );
};
