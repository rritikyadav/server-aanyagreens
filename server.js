import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import dashboard_router from './routes/dashboard.js';
import login_route from './routes/login.js';
import dbConnection from './Db/db.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


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



