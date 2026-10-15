
class LoginPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
    }
  
    enterUsername(username) {
      cy.get('input[name="username"]').should('be.visible').type(username);
    }
  
    enterPassword(password) {
      cy.get('input[name="password"]')
        .should('be.visible')
        .type(password, { log: false });
    }
  
    clickLogin() {
      cy.get('button[type="submit"]').click();
    }
  
    verifyDashboard() {
      cy.url().should('include', '/dashboard');
      cy.get('.oxd-topbar-header').should('be.visible');
    }
  
    login(username, password) {
      this.visit();
      this.enterUsername(username);
      this.enterPassword(password);
      this.clickLogin();
      this.verifyDashboard();
    }
  }
  
  export default LoginPage;
  