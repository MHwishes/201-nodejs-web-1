require('should');
const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const refrush = require('../tools/refrushMongo');

describe("CartController", ()=> {
    beforeEach(()=> {
        refrush();
    });

    it('getAll', ()=> {
        request
            .get("/cart")
            .expect(200)
            .end()
    });


    it('getOne', ()=> {
        request
            .get('/cart/587f0f2586653d19297d40c6')
            .expect(200)
            .expect((res)=> {
                res.body._id.should.equal('587f0f2586653d19297d40c6');
            })
            .end()

    });

    it("create", ()=> {
        request
            .post('/cart')
            .send({
                userId: '2',
                items:[{
                    count:2,
                    item:'587f0f2586653d19297d40c2'
                }]


            })
            .expect(201)
            .end();
    });

    it('update', ()=> {
        request
            .put('/cart/587f0f2586653d19297d40c6')
            .send({
                userId:'3'
            })
            .expect(204)
            .end()
    });

    it('delete', ()=> {
        request
            .delete('/category/587f0f2586653d19297d40c6')
            .expect(204)
            .end()
    });
});