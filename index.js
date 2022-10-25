import express from "express"
import usersRouter from "./users/routes.js"
import ordersRouter from "./orders/routes.js"
import connectToDB from "./database.js"

const PORT = process.env.PORT || 8080
const app = express()

app.use("/users", usersRouter)
app.use("/orders", ordersRouter)
    

app.listen(PORT, ()=>console.log(`succesfully running at http://localhost:${PORT}`))