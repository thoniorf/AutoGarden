const path = require('path');
const express = require('express');
const exphbs = require ('express-handlebars');
const helmet = require ('helmet');
const app = express();
const port = 3000;

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(helmet());
app.use((request, response, next) => {
  console.log(request.headers)
  next()
});

app.use((request, response, next) => {
  request.chance = Math.random()
  next()
});

app.get('/', (request, response) => {
  response.render('home',{
    name : 'AutoGarden',
    chance : request.chance
  });
  //throw new Error('oops');
});
app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
});

app.listen(port,(err) => {
  if(err) {
    return console.console.log('something wrong happened',err);
  }
  console.log(`server is listen on port ${port}`);
});
