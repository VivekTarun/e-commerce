const express = require('express');
const {PORT} = require('./config/serverConfig');

const app = express();

app.listen(PORT, () => {
    console.log(`server is listing at port 3000`);
})