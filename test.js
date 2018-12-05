var assert = require('assert');
const request = require('supertest');
const app = require('./app');

describe('Test read api', function(){
    it('Sto testando la lettura degli utenti', function(done){
        request(app)
            .get('/list')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                assert.equal(res.body.length, 0);
                done(); 
            });
    });
    it('Sto aggiungendo gli utenti', function(done){
        request(app)
            .post('/list?assignedTo=mamma')
            .set('Accept', 'application/json')
            .send({name: 'pulire', description: 'casa',completed:true,assignedTo:"mamma"})
            .expect(201)
            .end(function(err, res) {
                if (err) return done(err);
                done(); 
            });
    })

    it('Sto aggiungendo gli utenti', function(done){
        request(app)
            .post('/list')
            .set('Accept', 'application/json')
            .send({name: 'pulire', description: 'casa',completed:true,assignedTo:"mamma"})
            .expect(401)
            .end(function(err, res) {
                if (err) return done(err);
                done(); 
            });
    })

})