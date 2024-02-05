var elements = require('../Locators/locators')
class LandingPage{
    verifyLandingPage(expectedValue){
        const landingPageHeader = cy.get(elements.LandingPage.landingPageHeader)
        landingPageHeader.should('be.visible')
        return landingPageHeader.invoke('text').should('eq',expectedValue)
    }
}
export default LandingPage