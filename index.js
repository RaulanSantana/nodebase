const { createServer } = require('http');
// const express = require('express');
// const app = express();
const port = 3000;
const dotenv = require('dotenv');

dotenv.config();


const app = require ('./config/router-factory');

const http = createServer(app);

process.on('SIGINT', () => { http.close((error) => {
    if (error) {
      console.error(`${error.name}: ${error.message}`);
    }
    process.exit(error ? 1 : 0);
  });
});

// app.get('/teste', (req, res) => res.send('faz o L'));

// app.post("/nome", (req, res) => {
//   const nome = req.body.nome;
//   res.send(`Faz o L ${nome}`);
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
