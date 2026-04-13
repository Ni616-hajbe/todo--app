const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let todos = [];

app.get('/', (req, res) => res.render('index', { todos }));

app.post('/add', (req, res) => {
  todos.push(req.body.title);
  res.redirect('/');
});

app.listen(3000, () => console.log('Running on http://localhost:3000'));