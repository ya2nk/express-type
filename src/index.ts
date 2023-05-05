import express, {Request,Response} from 'express'
import { AppDataSource } from './config/config.database'
import { requestLogger,errorLogger,errorResponder,invalidPathHandler } from './middlewares/middleware.logger'
import routerApi from './routes/route.api'

const app = express()
const port:Number = 5000

app.use("/api",routerApi)

app.use(requestLogger)
app.use(errorLogger)
app.use(errorResponder)
app.use(invalidPathHandler)

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


app.listen(port,() => {
    console.log(`Server Running on port : ${port}`)
})

