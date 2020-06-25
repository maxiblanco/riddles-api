const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

console.log(`Riddle RESTful API server started on port ${port}`);
