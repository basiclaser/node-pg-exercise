import express from "express"
import usersRouter from "./users/routes.js"
import ordersRouter from "./orders/routes.js"
import { connectToDB } from "./database.js"
import cors from "cors"

const PORT = process.env.PORT || 8080
const api = express()

connectToDB()
    .then(()=>{
        api.use(express.json())
        // i want you to allow CROSS-ORIGIN REQUESTS

        // 2 completely different origins
        // your express API > heroku.com 
        // your react client > netlify.com 


        api.use(cors())

        api.use("/users", usersRouter)
        api.use("/orders", ordersRouter)
        
        api.listen(PORT, ()=>console.log(`succesfully running at http://localhost:${PORT}`))
    })
    .catch(error => console.log("ERROR!! failed to connect to database. Turning off." + error))

