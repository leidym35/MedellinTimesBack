let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;


chai.use(chaiHttp);
const url= 'http://localhost:3000';



   describe('Insertar publicidad: ',()=>{
    it('debera Insertar una publicidad', (done) => {
    chai.request(url)
    .post('/publicidadSave')
    .send({titulo:"test",imagen:"este es un test desde mocha"})
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });
   describe('Consultar publicidad: ',()=>{
    it('consultara todos los registros', (done) => {
    chai.request(url)
    .get('/publicidad')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });
   
   describe('Eliminar una publicidad: ',()=>{
    it('debera eliminar una publicidad', (done) => {
    chai.request(url)
    .get('/publicidadDelete/3')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });