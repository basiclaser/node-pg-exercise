import express from "express"
import {db} from "../database.js"
import fs from "fs"

// let res = fs.readFileSync("./package.json", "utf8")
// console.log(res)

const subRouter = express.Router()

subRouter
    .route("/")
    .get((req, res) => {
        db.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
            if(error) {
                res.send(error)
            }
            res.json(results.rows)
        })
    })
    .post((req, res) => {
        const {first_name, last_name, age} = req.body
        db.query(`
            INSERT INTO users (first_name, last_name, age)
            VALUES ($1, $2, $3);
        `, [first_name, last_name, age], (error, results) => {
            if(error) {
                res.send(error)
            }
            res.json(results.rows)
        })
    })

subRouter
    .route("/:id")
    .get((req, res) => {
        const {id} = req.params
        db.query('SELECT * FROM users WHERE id=$1 ORDER BY id ASC', [id], (error, results) => {
            if(error) {
                res.send(error)
            }
            res.json(results.rows)
        })
    })
    .put((req, res) => {
        res.send("put :id route working, got id:" + req.params.id)
    })
    .delete((req, res) => {
        res.send("delete :id route working, got id:" + req.params.id)
    })

export default subRouter;