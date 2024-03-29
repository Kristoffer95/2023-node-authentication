import express, { Express, Request, Response } from 'express'
import session from 'express-session'
import { Redis } from 'ioredis'
import morgan from 'morgan'
import routes from './api/v1/routes'
import dotenv from 'dotenv'
import RedisStore from 'connect-redis'

import { globalErrorHandler } from './api/v1/middlewares'
import {
	REDIS_OPTIONS,
	SESSION_OPTIONS,
	APP_PORT,
} from './config'

const client = new Redis(REDIS_OPTIONS)

dotenv.config()
const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use(
	session({
		...SESSION_OPTIONS,
		store: new RedisStore({ client }),
	}),
)

app.use('/api/v1/', routes)

app.use((req: Request, res: Response) => {
	res.status(404).json({ message: 'Not Found' })
})

// app.use((err: Error, req: Request, res: Response) => {
// 	console.log(err)
// 	// res.status(500).json({
// 	// 	message: 'Internal Server Error',
// 	// })
// 	throw new Error('Internal Server Error')
// })

app.use(globalErrorHandler)

// const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 8001;
app.listen(APP_PORT, () => {
	console.log(`Server running on port ${APP_PORT}`)
})
