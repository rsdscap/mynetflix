const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running in ${port}`);
});

/* Para rodar tudo junto, lembre-se se instalar:
npm install --save-dev concurrently
E de alterar os scripts no package.json
"scripts": {
  "start": "node ./server.js",
  "dev": "concurrently \"react-scripts start\" \"node ./server.js\"",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "server:static": "json-server --watch ./src/data/db.json --port 8080",
  "server": "node ./server.js"
}, */
