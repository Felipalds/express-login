import { Router, Request, Response } from "express";

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    return res.send("Hello world")
})

routes.post('/login', (req: Request, res: Response) => {
    console.log(req.body)

    return res.sendStatus(200)
})

export default routes