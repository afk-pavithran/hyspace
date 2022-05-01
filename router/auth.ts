import express, {Express, Request, Response, Router, NextFunction} from "express"
import jwt from "jsonwebtoken"

const router : Router = express.Router()

router.post('/register', (req: Request, res: Response, next: NextFunction) => {
    const {username, password} = req.body;
    res.send({username, password})
})

router.get('/login', (req: Request, res: Response, next: NextFunction) => {
    res.send({msg: 'Login Page'})
})

module.exports = router