
class AdminUserPage {
    openAdminModule() {
      cy.contains('.oxd-main-menu-item', 'Admin').click();
      cy.url().should('include', '/admin/viewSystemUsers');
    }
  
    clickAddUser() {
      cy.contains('button', 'Add').click();
      cy.contains('h6', 'Add User').should('be.visible');
    }
  
    selectUserRole(role) {
      cy.contains('label', 'User Role')
        .parent()
        .parent()
        .find('.oxd-select-text')
        .click();
  
      cy.get('.oxd-select-dropdown')
        .contains('.oxd-select-option', role)
        .should('be.visible')
        .click();
    }
  
    selectStatus(status) {
      cy.contains('label', 'Status')
        .parent()
        .parent()
        .find('.oxd-select-text')
        .click();
  
      cy.get('.oxd-select-dropdown')
        .contains('.oxd-select-option', status)
        .should('be.visible')
        .click();
    }
  
    enterEmployeeName(name) {
      cy.get('input[placeholder="Type for hints..."]')
        .should('be.visible')
        .type(name);
  
      cy.contains('.oxd-autocomplete-option', 'Amelia Brown')
        .should('be.visible')
        .click();
    }
  
    enterUsername(username) {
      cy.contains('label', 'Username')
        .parent()
        .parent()
        .find('input')
        .should('be.visible')
        .type(username);
    }
  
    enterPassword(password) {
      cy.contains('label', 'Password')
        .parent()
        .parent()
        .find('input')
        .should('be.visible')
        .type(password, { log: false });
    }
  
    confirmPassword(password) {
      cy.contains('label', 'Confirm Password')
        .parent()
        .parent()
        .find('input')
        .should('be.visible')
        .type(password, { log: false });
    }
  
    saveUser() {
      cy.contains('button', 'Save')
        .should('be.visible')
        .click();
    }
  
    searchUser(username) {
      cy.url().should('include', '/admin/viewSystemUsers');
  
      cy.get('.oxd-form')
        .first()
        .within(() => {
          cy.contains('label', 'Username')
            .parent()
            .parent()
            .find('input')
            .should('be.visible')
            .type(username);
  
          cy.contains('button', 'Search')
            .should('be.visible')
            .click();
        });
    }
  }
  
  export default AdminUserPage;
  