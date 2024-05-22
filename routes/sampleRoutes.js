const express = require("express");
const sampleController = require("../controllers/sampleController");

const sampleRoutes = express.Router();

sampleRoutes.post("/generate", sampleController.sampleController);

module.exports = sampleRoutes;
