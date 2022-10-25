import {Router} from "express"

const subRouter = Router()

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
        res.send("get :id route working, got id:" + req.params.id)
    })
    .put((req, res) => {
        res.send("put :id route working, got id:" + req.params.id)
    })
    .delete((req, res) => {
        res.send("delete :id route working, got id:" + req.params.id)
    })

export default subRouter;