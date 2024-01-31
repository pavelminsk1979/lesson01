
import request from 'supertest'
import {app} from "../src";


describe('/products',()=>{

    beforeAll(async ()=>{
        await request(app)
            .delete ('/__test__/data')
    })

it('название теста уникальное',async ()=>{
    await request(app)
        .get('/products')
        .expect([])
})

    it('should create product',async ()=>{
        const response =await request(app)
            .post('/products')
            .send({title:'kljalkjflakjfd'})
            .expect(201)
        expect(response.body.title).toBe('kljalkjflakjfd');

    })


})