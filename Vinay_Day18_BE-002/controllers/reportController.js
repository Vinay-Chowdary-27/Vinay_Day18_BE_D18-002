const reportModel = require("../models/reportModel");

const getEmployees = async (req, res) => {

    console.time("Employee Query");

    const data = await reportModel.getEmployees();

    console.timeEnd("Employee Query");

    res.json(data);
};

const attendanceReport = async (req, res) => {

    const data = await reportModel.attendanceReport();

    res.json(data);
};

const leaveReport = async (req, res) => {

    const data = await reportModel.leaveReport();

    res.json(data);
};

module.exports = {
    getEmployees,
    attendanceReport,
    leaveReport
};