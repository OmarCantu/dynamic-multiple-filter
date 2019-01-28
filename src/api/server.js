const jsonServer = require('json-server');

const companies = require('./data/companies.json');

const server = jsonServer.create();
const JSONServerMiddleware = jsonServer.defaults();

server.use(JSONServerMiddleware);

server.get('/companies', (req, res) => {
  res.jsonp(companies);
});

server.listen(4000, '0.0.0.0', () => {
  console.log('JSON Server is running in port 4000');
});
