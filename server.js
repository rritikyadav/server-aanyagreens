import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import dashboard_router from './routes/dashboard.js';
import login_route from './routes/login.js';
import dbConnection from './Db/db.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const allowedOrigins = [
  "https://aanyagreens.in",
  "https://admin.aanyagreens.in"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));


app.use('/dashboard', dashboard_router);
app.use('/login', login_route);


dbConnection()
    .then(() => {
        app.listen(port, () => {
            console.log(`server running on http://localhost:${port}`)
        })
    }
    ).catch((err) => {
        console.log("server error")
    }
    )



