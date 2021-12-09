//require chai som vi jo har importeret ved npm 
const {expect} = require('chai')
const chai = require('chai')
const chaiHttp = require('chai-http')
const user = require('../src/controllers/user-controller')
chai.use(chaiHttp)
//vi tester vores login funktion
describe('API', () => {
describe('Post /Login', () => {
    it('should login', (done)=>{
        //sætter user til den user vi er logget ind på localhost med
        const user = {email:"mikkel.wager@gmail.com",password:"password123"}

      chai
      .request("http://localhost:8200/users")
      //tester post request med endpointet /login
      .post('/login')
      //sender useren 
      .send(user)
      .end((err,res)=>{
          //satuskoden skal være 200
        expect(res.status).to.equal(200);
        //der skal ikke være nogen error
        expect(err).to.be.null;
        //email skal være lig med den user vi bruger, det samme gælder for password
        expect(user.email).equal("mikkel.wager@gmail.com");       
        expect(user.password).equal("password123");       
        //tester også om vores stringify virker, både for email og password
        expect(user.email).to.be.a('string');
        expect(user.password).to.be.a('string');
        done();
        
      })
    })
})
      describe('Post /Login', () => {
        it('should give error 404', (done)=>{
            //sætter user til den user vi er logget ind på localhost med
            const user = {email:"prøve",password:"prøve"}
    
          chai
          .request("http://localhost:8200/users")
          //tester post request med endpointet /login
          .post('/login')
          //sender useren 
          .send(user)
          .end((err,res)=>{
              //satuskoden skal være 404
            expect(res.status).to.equal(404);
            done();
    })
})
      })
    })
    
