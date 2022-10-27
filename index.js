import express from "express"
import usersRouter from "./users/routes.js"
import ordersRouter from "./orders/routes.js"
import { connectToDB } from "./database.js"
import cors from "cors"

const PORT = process.env.PORT || 8080
const api = express()

connectToDB()
    .then(()=>{

        // CORS middleware to modify headers to allow cross-origin-requests
        api.use(cors())
        // i want you to allow CROSS-ORIGIN REQUESTS
        
        // 2 completely different origins
        // your express API > heroku.com 
        // your react client > netlify.com 
        
        // api.use((req, res, next)=> {
        //     console.log(new Date, "request recieved!", req.method, req.path)
        //     next()
        // })

        // JSON body parsing middleware
        api.use(express.json())

        api.use("/users", usersRouter)
        api.use("/orders", ordersRouter)

        // error handling middleware
        api.use((error, req, res, next) => {
            console.log(error.message)
            res.status(500).send("😬")
        })
        // try {
        //     throw new Error("uh oh.")
        // } catch(e) {
        //     console.log("there was an error, but dont worry i handled it")
        // }
        // TRY CATCH 
        api.listen(PORT, ()=>console.log(`succesfully running at http://localhost:${PORT}`))
    })
    .catch(error => console.log("ERROR!! failed to connect to database. Turning off." + error))

