const express = require('express');

const postsRouter = require('./api/postsRouter')

const server = express();

server.use('/api', postsRouter);

server.get('/', (req, res) => {
    res.send('Server Up and Running')
});

server.listen(8000, () => console.log('API running on port 8000'));