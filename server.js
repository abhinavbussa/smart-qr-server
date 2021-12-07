require("dotenv").config()
const app = require("./app")

app.listen(process.env.SERVER_PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at port:${process.env.SERVER_PORT}`)
})
