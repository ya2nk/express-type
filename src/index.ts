import express, { Request, Response } from 'express'
import cors from 'cors'
import { AppDataSource } from './config/config.database'
import { requestLogger, errorLogger, errorResponder, invalidPathHandler } from './middlewares/middleware.logger'
import routerApi from './routes/route.api'
import logger from './utils/util.logger'

const app = express()
const port: Number = 5000

app.use(cors())
app.use(express.json())

app.use(requestLogger)

app.use("/api", routerApi)

app.use(errorLogger)
app.use(errorResponder)
app.use(invalidPathHandler)

AppDataSource.initialize()
    .then(() => {
        logger.info("Data Source has been initialized!")
    })
    .catch((err) => {
        logger.error("Error during Data Source initialization", err)
    })


app.listen(port, () => {
    logger.info(`Server Running on port : ${port}`)
})

