const express = require("express");
const router = express.Router();

const {postDonarData} = require("../controllers/donar.controller")

router.post("/post-donar-data",postDonarData)

module.exports = router;