var assert = require('assert');
const request = require('supertest');
const app = require('./app');

describe('Test read api', function(){

it('Sto aggiungendo le cose da fare alla lista', function(done){
        request(app)
            .post('/list')
            .set('Accept', 'application/json')
            .send({name: 'pulire', description: 'casa',
                completed:true,assignedTo:"mamma"})
            .expect(201)
            .end(function(err, res) {
                if (err) return done(err);

                done(); 
            });
    })

it('Sto aggiungendo le cose da fare alla lista', function(done){
        request(app)
            .post('/list')
            .set('Accept', 'application/json')
            .send({name: 'lavare', description: 'casa',
                completed:true,assignedTo:"papà"})
            .expect(201)
            .end(function(err, res) {
                if (err) return done(err);

                done(); 
            });
    })




it('Sto testando la lettura degli utenti', function(done){
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                assert.equal(res.body.length, 6);
                done(); 
            });
    });

it('Sto testando la lettura dei ToDo per utente', function(done){
        request(app)
            .get('/list_users?assignedTo=mamma')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                assert.equal(res.body.length, 1);
                done(); 
            });
    });

it('Sto cancellando todo in base all id', function(done){
        request(app)
            .delete('/list/1')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);

                assert.equal(res.body.length, 1);
                done(); 
            });
    })
it('Sto testando la lettura dei ToDo true', function(done){
        request(app)
            .get('/completed')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                assert.equal(res.body.length,1);
                done(); 
            });
    });
it('Sto modificando lo stato di completamento in base all id', 
    function(done){
        request(app)
            
            .put('/list/0')
            .send({completed:false})
            .set('Accept', 'application/json')
            .expect(201)
            .end(function(err, res) {
                if (err) return done(err);
                assert.equal(res.body, false);
                done(); 
            });
    })

// it('Sto modificando la description in base all id', function(done){
//         request(app)
            
//             .put('/list/0')
//             .send({description:'scala'})
//             .set('Accept', 'application/json')
//             .expect(201)
//             .end(function(err, res) {
//                 if (err) return done(err);
//                 assert.equal(res.body.description, 'scala');
//                 done(); 
//             });
//     })

})
