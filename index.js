const aoijs = require("aoi.js");
const express = require("express");
require('dotenv').config();

const bot = new aoijs.Bot({
  token: process.env.TOKEN,
  prefix: ['$getServerVar[prefix]','<@$clientID>','<@!$clientID>']
});

//Hosting Stuff

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
//

//Handlers

bot.loadCommands(`./commands/`)
bot.status(require('./handler/status.js'))
bot.variables(require('./handler/variables.js'))

//

bot.onMessage({
  respondToBots: false
});

bot.command({
  name:"ping",
  code:`:ping_pong: Pong! \`$ping ms\``
});
