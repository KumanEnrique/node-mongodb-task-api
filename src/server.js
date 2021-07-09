import path from 'path'
import express from 'express'
import IndexRoutes from './routes/index'
import TaskRoutes from './routes/task'

const app = express()

//settings
app.set('port',process.env.PORT || 3000)

//middlewares
app.use(express.json())

//routes
app.use(IndexRoutes)
app.use('/task',TaskRoutes)

export default app