import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.S3_BUCKET || 3000;

require('dotenv').config();

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors);
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const routes = require('./routes');
// app.use(routes);

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});