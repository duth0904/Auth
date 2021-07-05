require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload")
const userRouter = require("./routes/userRouter")

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

const URI = process.env.DB_URL
const PORT = process.env.PORT || 4000

//connect to mongoDb
mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true, 
    useFindAndModify: false
}, (err) => {
    if(err) throw err
    console.log("Connected to DB")
})

// Routes
app.use("/user", userRouter)


app.listen(PORT, () => {
    console.log("Server is running on port 4000")
})



