const express = require("express");
const { registerEmp, loginEmp } = require("../controllers/authCtrl");
const router = express.Router();

router.post("/register-emp", registerEmp);
router.post("/login-emp", loginEmp);

module.exports = router;