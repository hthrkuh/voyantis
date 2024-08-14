var createError = require("http-errors");
var express = require("express");
var dotenv = require("dotenv");
var path = require("path");
const cors = require("cors");
var logger = require("morgan");

dotenv.config();

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "build")));

const queueRoutes = require("./app/routes/queueRoutes");

app.use("/", queueRoutes);

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.use(function (req, res, next) {
    res.status(404).send("404");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

// listen for requests
app.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log("listening on port " + process.env.PORT);
});

module.exports = app;
