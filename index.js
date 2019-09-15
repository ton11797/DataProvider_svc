import express from 'express'
import bodyParser from 'body-parser'
import { Test } from './src/Route'
import service from './src/Config/service'
import cors from 'cors'
import CORS from './src/Config/CORS'
const app = new express()
app.use(cors(CORS))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(Test)
app.listen(service.port)
console.log(`Service is running on port ${service.port}.`)
console.log(process.env.DOCKER)