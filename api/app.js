var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParse = require('body-parser');


var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var productsRouter = require('./routes/products');
var catesRouter = require('./routes/cates');
var adminRouter = require('./routes/admin');
var blogPostRouter = require('./routes/blogPost');
var cartsRouter = require('./routes/carts');
var colorsRouter = require('./routes/colors');
var sizesRouter = require('./routes/sizes');
var tagsRouter = require('./routes/tags');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// connect database
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cozaStore_database', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useCreateIndex', true);


app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use('/products', productsRouter);
app.use('/cates', catesRouter);
app.use('/admin', adminRouter);
app.use('/blogPost', blogPostRouter);
app.use('/carts', cartsRouter);
app.use('/colors', colorsRouter);
app.use('/sizes', sizesRouter);
app.use('/tags', tagsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
