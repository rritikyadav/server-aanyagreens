import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const login_route = express.Router();

login_route.post('/', async (req, res) => {
    const sent_username = req.body.userName;
    const sent_password = req.body.password;

    const UserCollection = mongoose.connection.collection('Users');

    const finduser = await UserCollection.findOne({ userName: sent_username });

    if (!finduser) {
        return res.status(404).json({ error: "User Not Found" })
    }

    if (!(sent_password === finduser.password)) {
        return res.status(404).json({ error: "Password Is Incorrect" })
    }

    const token = jwt.sign({userName : sent_username}, process.env.JWT_SECRET,{expiresIn :'1h'});
    res.send(token)

});


export default login_route;