"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_proxy_middleware_1 = require("http-proxy-middleware");
const options = {
    target: 'https://chronos.compraqui.app',
    changeOrigin: true,
    router: { 'dev.localhost:3000': 'http://localhost:8000' }
};
const apiProxy = http_proxy_middleware_1.createProxyMiddleware(options);
const app = express();
app.use('/api', apiProxy);
const PORT = 3333;
app.listen(PORT, () => `server listening on port ${PORT}`);
