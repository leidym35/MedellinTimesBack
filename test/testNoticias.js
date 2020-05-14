let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;


chai.use(chaiHttp);
const url= 'http://localhost:3000';



   describe('Insertar Noticias: ',()=>{
    it('insertar noticia', (done) => {
    chai.request(url)
    .post('/noticiasSave')
    .send({titulo:"test",body:"este es un test desde mocha",imagen:"noticia"})
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });
   describe('Consultar noticias: ',()=>{
    it('consultara todos los registros', (done) => {
    chai.request(url)
    .get('/noticias')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });
   
   describe('Eliminar una noticia: ',()=>{
    it('debera eliminar una noticia', (done) => {
    chai.request(url)
    .get('/noticiasDelete/2')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });