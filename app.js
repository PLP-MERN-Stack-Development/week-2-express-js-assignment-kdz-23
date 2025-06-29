
// The app defination
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productRoutes = require('./routes/product.routes');
const logger = require('./middleware/logger.middleware');
const auth = require('./middleware/auth.middleware');
const errorHandler = require('./middleware/error.middleware');

app.use(bodyParser.json());
app.use(logger);
app.use(auth);
app.use('/api', productRoutes);
app.use(errorHandler);

module.exports = app;
