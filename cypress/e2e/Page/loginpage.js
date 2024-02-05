const elements = require('../Locators/locators')

class LoginPage{
    inputUsername(username)
    {
        cy.get(elements.LoginPage.username).should('be.visible')
        cy.get(elements.LoginPage.username).clear().type(username);
    }
    inputPassword(password)
    {
        cy.get(elements.LoginPage.password).should('be.visible')
        cy.get(elements.LoginPage.password).clear().type(password)
    }
    clickLoginButton(){
        cy.get(elements.LoginPage.loginButton).click()
    }
    verifyOnLoginPage(){
        cy.get(elements.LoginPage.loginPageHeader).should('be.visible')
    }
}

export default LoginPage