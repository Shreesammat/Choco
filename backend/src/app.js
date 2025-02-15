import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'
import noteRouter from './routes/note.routes.js'
import folderRouter from './routes/folder.routes.js'
//routes declaration
app.use("/user", userRouter)
app.use("/api",noteRouter)
app.use("/folders", folderRouter)

export { app }