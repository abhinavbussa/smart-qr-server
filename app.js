const createError = require("http-errors")
const express = require("express")
const path = require("path")
const logger = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

const handleError = require("./src/middleware/handleErrors")
const routes = require("./src/routes")

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "jade")

app.use(logger("dev"))
app.use(express.static("public"))
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/api/v1", routes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}
  handleError(err, req, res, next)
})

module.exports = app
