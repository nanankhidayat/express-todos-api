require('dotenv').config()
const monggose = require('mongoose')

const connectDB = async () => {
    try {
        await monggose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: true,
        }, console.log('Database connected'))
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB