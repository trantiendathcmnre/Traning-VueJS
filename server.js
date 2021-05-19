import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import swagger from 'swagger-jsdoc';
import winston from 'winston';
import validator from 'express-validator';
import userRouter from './server/routes/userRouter';
import bookRouter from './server/routes/bookRouter';
import categoryRouter from './server/routes/categoryRouter';
import searchRouter from './server/routes/searchRouter';
import notificationRouter from './server/routes/notificationRouter';

const server = express();

dotenv.load();

const swaggerJSDoc = swagger;
// swagger definition
const swaggerDefinition = {
  info: {
    title: 'HelloBooks API',
    version: '1.0.0',
    description:
   'An application that helps manage a library and its processes '
   + 'like stocking, tracking and renting of books.'
  },
  host: 'andela-hellobooks.herokuserver.com',

  basePath: '/api/v1'
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['./server/routes/*.js']
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

server.use(logger('dev'));
server.use(express.static('./client/')); // configure static files folder
server.use(express.static('./client/public/')); // configure static files folder
server
  .use('/api/docs/', express.static(path.join(__dirname, 'server/api-docs/')));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(validator());

server.use('/api/v1', bookRouter);

server.use('/api/v1/category', categoryRouter);

server.use('/api/v1/users', userRouter);

server.use('/api/v1/search', searchRouter);

server.use('/api/v1/notification', notificationRouter);

// serve swagger
server.get('/api/docs/hellobooks.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  winston.info(`Connected on port: ${port}`);
});

export default server;
