const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

const DIST_PATH = path.join(__dirname, '../dist');
const PUBLIC_PATH = path.join(__dirname, '../public');

app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));

app.listen(PORT, () => {
    console.log(`Server is listening to port: ${PORT}`);
})