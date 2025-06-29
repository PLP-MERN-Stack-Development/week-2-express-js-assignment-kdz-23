
// Logger Middleware
const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/requests.log');

// Ensure logs directory exists
if (!fs.existsSync(path.join(__dirname, '../logs'))) {
  fs.mkdirSync(path.join(__dirname, '../logs'));
}

module.exports = (req, res, next) => {
  const logEntry = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}\n`;
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) console.error('Logging failed:', err);
  });
  console.log(logEntry.trim());
  next();
};


