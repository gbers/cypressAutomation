
describe('Verify user should able to login to Amazon', () => {
 
  it('Login using correct account', () => {
    cy.openLoginPage();
    cy.loginEmail('tvlkforios@gmail.com');
    cy.loginPassword('Automation1!');
    cy.verifyLogin();
  })
  
  it('Unable login using incorrect account',  () => {
    cy.openLoginPage();
    cy.loginEmail('tvlkforios@gmailcom');
    cy.emailErrorNotification('email');
    cy.loginEmail('tvlkforios@gmail.com');
    cy.loginPassword('Automation1');
    cy.emailErrorNotification('password');  
  })

})