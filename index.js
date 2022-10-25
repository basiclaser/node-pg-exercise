import express from "express"
import usersRouter from "./users/routes.js"
import ordersRouter from "./orders/routes.js"
import { connectToDB } from "./database.js"

const PORT = process.env.PORT || 8080
const api = express()

connectToDB()
    .then(()=>{
        api.use(express.json())

        api.use("/users", usersRouter)
        api.use("/orders", ordersRouter)
        
        api.listen(PORT, ()=>console.log(`succesfully running at http://localhost:${PORT}`))
    })
    .catch(error => console.log("ERROR!! failed to connect to database. Turning off." + error))

