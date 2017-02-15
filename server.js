const express =     require('express');
const statusCodes = require('./data/status-codes.json');
const path =        require('path');
const hbs =         require('express-handlebars');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// app.use(express.static(path.join(__dirname, 'public')));

// add your routes here :)
app.get('/code/:code', (req, res) => {
  const { code } = req.params;
  const statusCode = statusCodes.find((val) => {
    return val.code === code;
  });

console.log(statusCode);
  res.render('main');s
}); // get method



// *************************
// app.get('/code', (req, res) => {
//   const codesWithImages = statusCodes.map(({ code, phrase }) => (
//     { code, phrase, image: `https://http.cat/${code}.jpg` }
//   ));
//   res.json(codesWithImages);
// }); *****************************


app.listen(8080);

module.exports = app;
