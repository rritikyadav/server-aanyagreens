import dotenv from 'dotenv'
dotenv.config()

import jwt from 'jsonwebtoken'

export default function Authentication(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(404).json({ error: "Unauthorized Access" })
    }
    const authtoken = req.headers.authorization;
    const authresult = authCheck(authtoken)
    if (!authresult) {
        res.status(404).json({error:"Unauthorized Access"})
    }
    next()
}

function authCheck(authtoken) {
    try {
        jwt.verify(authtoken, process.env.JWT_SECRET);
        return true
    } catch (error) {
        return false
    }

}