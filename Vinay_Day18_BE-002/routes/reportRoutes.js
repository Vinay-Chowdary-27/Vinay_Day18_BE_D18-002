const express = require("express");

const router = express.Router();

const controller = require("../controllers/reportController");

router.get("/employees", controller.getEmployees);

router.get("/attendance-report", controller.attendanceReport);

router.get("/leave-report", controller.leaveReport);

module.exports = router;