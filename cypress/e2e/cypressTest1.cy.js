import {LoginPage,LandingPage} from "./Page";

const login = new LoginPage();
const landing = new LandingPage();

beforeEach( function (){
  cy.fixture('example.json').then(url => {
    cy.visit(url.urlToTest);
    login.verifyOnLoginPage();
  })
})
describe('Login Test', () => {
  it('Login Testing with valid creds ', () => {
    cy.fixture('example.json').then(data => {
      login.inputUsername(data.username)
      login.inputPassword(data.password)
      login.clickLoginButton();
      landing.verifyLandingPage('Dashboard')
    })

  })
})