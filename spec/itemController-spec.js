require('should');
const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const refrush = require('../tools/refrushMongo');

describe("ItemController", ()=> {
    beforeEach(()=> {
        refrush();
    });

    it('getAll', ()=> {
        request
            .get("/item")
            .expect(200)
            .end()
    });


    it('getOne', ()=> {

        request
            .get('/item/587f0f2586653d19297d40c2')
            .expect(200)
            .expect((res)=> {
                res.body._id.should.equal('587f0f2586653d19297d40c2');
            })
            .end()

    });

    it("create", ()=> {
        request
            .post('/item')
            .send({
                name: 'mahong',
                price: 100,
                category: '587f0f2586653d19297d40c8'
            })
            .expect(201)
            .end();
    });

    it('update', ()=> {
        request
            .put('/item/587f0f2586653d19297d40c2')
            .send({
                name: '钢笔',
                price: 18,
                category: '587f0f2586653d19297d40c8'
            })
            .expect(204)
            .end()
    });

    it('delete', ()=> {
        request
            .delete('/item/587f0f2586653d19297d40c2')
            .expect(204)
            .end()
    });
});