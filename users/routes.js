import express from "express"

const subRouter = express.Router()

subRouter
    .route("/")
    .get((req, res) => {
        res.send("get route working")
    })
    .post((req, res) => {
        res.send("post route working")
    })

subRouter
    .route("/:id")
    .get((req, res) => {
        console.log("users id we are here")
        res.send("get HERE :id route working, got id:" + req.params.id)
    })
    .put((req, res) => {
        res.send("put :id route working, got id:" + req.params.id)
    })
    .delete((req, res) => {
        res.send("delete :id route working, got id:" + req.params.id)
    })

export default subRouter;