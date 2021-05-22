const express = require('express');
const http = require('http');
const index = require('./routes/index');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//設定api路由
app.use('/api', index);


//server
const server = http.createServer(app);
//server Port
server.listen(3000);

server.on('listening', () => {
    const addr = server.address();
    console.log(`Server is on ${addr.port}`);
})