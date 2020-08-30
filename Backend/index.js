const express = require('express')
const cors = require('cors');
const morgan = require('morgan');

const trackRoutes = require('./routes/audios');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/audios', trackRoutes);

app.listen(4000);
console.log('Server on port', 4000);
