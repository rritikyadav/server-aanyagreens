
import mongoose from 'mongoose'


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("DB Connection Success")
    }
    catch (err) {
        console.log("DB Connection Error:", err)
    }
}

export default dbConnection;