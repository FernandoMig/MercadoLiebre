const express = require('express');
const app = express();
const path = require("path");

//console.log(express);

app.use(express.static(path.resolve(__dirname, 'public')))

app.listen(3000, () => {
  console.log('Estamos en el puerto 3000');
});


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"))
})


app.get('/views/register.html', (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"))
})

app.get('/views/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"))
})