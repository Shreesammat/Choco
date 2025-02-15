import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
import { swaggerSpec, swaggerUi } from "./utils/swaggerConfig.js"
dotenv.config({
    path: './.env'
})
app.get('/',(req,res)=>{
    res.send("API working")
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})








