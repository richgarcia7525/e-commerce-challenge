const express = require('express');
const app = express();
const db = require("./models");
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the 
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}`))
}).catch (err =>console.log(err));
