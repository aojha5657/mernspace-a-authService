import request from 'supertest'
import { calculateDiscount } from './src/utils'
import app from './src/app'

describe('App', () => {
    it('should share the correct discount amount', () => {
        const discount = calculateDiscount(100, 10)
        expect(discount).toBe(10)
    })

    it('should respond with 200 status code', async () => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200)
    })
})
