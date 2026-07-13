const fs = require("fs");

const auditLogger = (req, res, next) => {

    const log = `${new Date().toISOString()} | ${req.method} ${req.url}\n`;

    fs.appendFileSync("./logs/audit.log", log);

    next();
};

module.exports = auditLogger;