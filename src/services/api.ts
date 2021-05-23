import { createProxyMiddleware } from 'http-proxy-middleware';
const express = require('express');
const cors = require('cors');

const options = {
    target: 'https://chronos.compraqui.app',
    changeOrigin: true,
    router: { 'localhost:3000/': 'http://localhost:3333' }
}

const apiProxy = createProxyMiddleware(options);

const app = express();
app.use(cors());
app.use(function(req : any, res : any, next : any){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Originm X-Requested-With, Content-Type, Accept");
})
app.use('/api', apiProxy);
const PORT = 3333;
app.listen(PORT, ()=>`server listening on port ${PORT}`);
