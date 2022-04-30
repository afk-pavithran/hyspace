import express, {Express, Request, Response, Router} from "express"

const app : Express = express();
const port : Number = 3000;


app.use(express.json())
app.get('/', (req : Request, res : Response) => res.json({msg: 'Hello'}))

const AuthRouter : Router = require('./router/auth')

app.use('/api', AuthRouter)

app.listen(port, () => console.log("Connected"))