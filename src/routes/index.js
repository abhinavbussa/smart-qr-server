const express = require("express")

const router = express.Router()

/* GET home page. */
router.get("/", (req, res, next) => {
 
     res.json({ title: "Smart QR" })
})

module.exports = router
