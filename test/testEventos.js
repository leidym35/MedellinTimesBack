let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;


chai.use(chaiHttp);
const url= 'http://localhost:3000';



   describe('Insertar eventos: ',()=>{
    it('debe insertar un evento ', (done) => {
    chai.request(url)
    .post('/eventosSave')
    .send({titulo:"test",descripcion:"este es un test desde mocha"})
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });
   describe('Consultar eventos: ',()=>{
    it('consultara todos los registros', (done) => {
    chai.request(url)
    .get('/eventos')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });
   
   describe('Eliminar un evento: ',()=>{
    it('debera eliminar un evento', (done) => {
    chai.request(url)
    .get('/eventosDelete/8')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });