// utils/logger.ts
import winston from 'winston';
import path from 'path';

// Define a custom text layout for readability
const logFormat = winston.format.printf(({ timestamp, level, message }) => {
  return `${timestamp} [${level}]: ${message}`;
});

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info', // Adjust minimum logging visibility
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }), // Automatically append error stacks
    logFormat
  ),
  transports: [
    // Output 1: Terminal Console with colors
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        logFormat
      )
    }),
    // Output 2: Append logs directly into a file
    new winston.transports.File({ 
      filename: path.join(__dirname, '../logs/execution.log'),
      level: 'debug' // Log absolutely everything to the file
    })
  ]
});
