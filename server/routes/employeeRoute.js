const express = require("express");
const { createEmp, getEmp, deleteEmp } = require("../controllers/empCtrl");
const router = express.Router();

router.post("/create-emp", createEmp);
router.get("/get-emp", getEmp);
router.delete("/delete-emp/:id", deleteEmp);

module.exports = router;