## Module

SQL Optimization & Reporting

## Objective

Develop reporting APIs using PostgreSQL and Express.js while implementing SQL optimization, attendance reports, leave reports, audit logging, and query performance analysis.

## Features

* Employee Data API
* Attendance Report API
* Leave Report API
* Audit Logging Middleware
* PostgreSQL Integration
* Query Performance Monitoring
* SQL Optimization Using Indexes

## Technologies Used

* Node.js
* Express.js
* PostgreSQL
* pg
* dotenv
* Morgan

## Installation

Install dependencies:

npm install

## Configure Environment

Create a .env file and add database credentials.

PORT=3000

DB_USER=postgres

DB_PASSWORD=postgres

DB_HOST=localhost

DB_PORT=5432

DB_NAME=flowtrack360

## Run Application

Development Mode:

npm run dev

Production Mode:

npm start

## API Endpoints

GET /api/reports/employees

GET /api/reports/attendance-report

GET /api/reports/leave-report

## SQL Optimization

Indexes are created on frequently queried columns to improve performance.

## Audit Logging

Every API request is recorded in logs/audit.log with timestamp, method, and URL.

## Query Analysis

Performance is measured using EXPLAIN ANALYZE and console.time().
