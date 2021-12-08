
const {expect} = require('chai')
const chai = require('chai')
const chaiHttp = require('chai-http')
const user = require('../src/controllers/user-controller')
chai.use(chaiHttp)

describe('API', () => {
describe('Post /Login', () => {
    it('should login', (done)=>{
        const user = {email:"mikkel.wager@gmail.com",password:"password123"}

      chai
      .request("http://localhost:8200/users")
      .post('/login')
      .send(user)
      .end((err,res)=>{
        expect(res.status).to.equal(200);
        expect(err).to.be.null;
        expect(localStorage).to.be.user
        done();
        
      })
    })
})
})

