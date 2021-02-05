var express = require("express");
var authController = require("../controllers/authController");

var router = express.Router();

router.get("/userinfo", authController, function (req, res) {
  if (res.auth.verified) {
    res.send("user verified");
  } else {
    res.send("user not verified");
  }
  
});

module.exports = router;
