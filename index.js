const express = require('express');
require('dotenv').config();
require('./db/dbConnection');
const userHandler = require('./handler/userHandler');
const cors = require('cors');
const port = process.env.PORT;
const cookieParser = require('cookie-parser');
const hostname = process.env.HOST_NAME;
const path = require('path');
// const path = require('path');

const app = express();
app.use(cookieParser());
app.use(express.json());

const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

app.use(cors(corsOptions));
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST'],
//     credentials: true,
//   })
// );
app.use(express.static('./public/uploads/'));
// app.use(express.static(path.join(__dirname, './public/Uploads')));

app.use(express.urlencoded({ extended: true }));

app.use('/user', userHandler);

// if (process.env.NODE_ENV == 'production') {
//   app.use(express.static('./client/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
//   });
// }

// error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next();
  }
  res.status(500).json({ error: 'There was a server side error!' });
});

// listening server

app.listen(port, hostname, () => {
  console.log(
    `Your server is running successfully at http://${hostname}:${port}`
  );
});
