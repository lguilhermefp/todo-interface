"use strict";
exports.__esModule = true;
var http_proxy_middleware_1 = require("http-proxy-middleware");
var express = require('express');
var cors = require('cors');
var options = {
    target: 'https://chronos.compraqui.app',
    changeOrigin: true,
    router: { 'localhost:3000/': 'http://localhost:3333' }
};
var apiProxy = http_proxy_middleware_1.createProxyMiddleware(options);
var app = express();
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Originm X-Requested-With, Content-Type, Accept");
});
app.use('/api', apiProxy);
var PORT = 3333;
app.listen(PORT, function () { return "server listening on port " + PORT; });
