import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "db_kasir",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl:
    process.env.DB_HOST && process.env.DB_HOST !== "localhost"
      ? {
          ca: fs.readFileSync(path.join(process.cwd(), "ca.pem")),
          rejectUnauthorized: true,
        }
      : undefined,
});

export default pool;
