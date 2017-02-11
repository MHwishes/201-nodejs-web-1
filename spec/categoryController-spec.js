require('should');
const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const refrush = require('../tools/refrushMongo');

describe("CategoryController", ()=> {
    beforeEach(()=> {
        refrush();
    });

    it('getAll', ()=> {
        request
            .get("/category")
            .expect(200)
            .end()
    });


    it('getOne', ()=> {
        request
            .get('/category/587f0f2586653d19297d40c8')
            .expect(200)
            .expect((res)=> {
                res.body._id.should.equal('587f0f2586653d19297d40c8');
            })
            .end()

    });

    it("create", ()=> {
        request
            .post('/category')
            .send({
                name: 'mahong',
            })
            .expect(201)
            .end();
    });

    it('update', ()=> {
        request
            .put('/category/587f0f2586653d19297d40c8')
            .send({
                name: '钢笔',
            })
            .expect(204)
            .end()
    });

    it('delete', ()=> {
        request
            .delete('/category/587f0f2586653d19297d40c8')
            .expect(204)
            .end()
    });
});