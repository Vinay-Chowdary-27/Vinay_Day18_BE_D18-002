const pool = require("../config/db");

const getEmployees = async () => {

    const query = `
        SELECT id,name,department,email
        FROM employees
        ORDER BY id
    `;

    const result = await pool.query(query);

    return result.rows;
};

const attendanceReport = async () => {

    const query = `
        SELECT
        e.id,
        e.name,
        COUNT(a.id) AS total_attendance
        FROM employees e
        LEFT JOIN attendance a
        ON e.id=a.employee_id
        GROUP BY e.id,e.name
        ORDER BY e.id
    `;

    const result = await pool.query(query);

    return result.rows;
};

const leaveReport = async () => {

    const query = `
        SELECT
        e.id,
        e.name,
        COUNT(l.id) AS total_leaves
        FROM employees e
        LEFT JOIN leaves l
        ON e.id=l.employee_id
        GROUP BY e.id,e.name
        ORDER BY e.id
    `;

    const result = await pool.query(query);

    return result.rows;
};

module.exports = {
    getEmployees,
    attendanceReport,
    leaveReport
};