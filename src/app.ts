import express, { NextFunction, Request, Response } from 'express'
import logger from './config/logger'
import createHttpError, { HttpError } from 'http-errors'

const app = express()

// Route Handler
app.get('/', (req: Request, res: Response) => {
    const err = createHttpError(401, 'You can not access this route.')
    throw err
    res.send('Welcome to auth service')
})

// Global Error Handler
 
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message)

    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    })
})

export default app
