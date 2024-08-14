const express = require("express");
const router = express.Router();
const queueController = require("../controllers/queueController");

router.post("/api/:queue_name", queueController.addMessage);
router.get("/api/queues", queueController.getQueues);
router.get("/api/:queue_name", queueController.getNextMessage);

module.exports = router;
