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
        .click();
    }
  
    enterEmployeeName(searchText, fullName) {
      cy.get('input[placeholder="Type for hints..."]')
        .should('be.visible')
        .type(searchText);
  
      cy.contains('.oxd-autocomplete-option', fullName)
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
  
      cy.contains('Successfully Saved')
        .should('be.visible');
    }
  
    searchUser(username, role, status) {
      this.openAdminModule();
  
      cy.contains('label', 'Username')
        .parent()
        .parent()
        .find('input')
        .should('be.visible')
        .clear()
        .type(username);
  
      cy.contains('button', 'Search')
        .should('be.visible')
        .click();
  
      this.verifyUserRecord(username, role, status);
    }
  
    verifyUserRecord(username, role, status) {
      cy.contains('.oxd-table-row', username)
        .should('be.visible')
        .and('contain', role)
        .and('contain', status);
    }
  
    clickEditUser(username) {
      cy.contains('.oxd-table-row', username)
        .should('be.visible')
        .within(() => {
          cy.get('button')
            .filter('[class*="oxd-table-cell-action-space"]')
            .should('have.length.greaterThan', 0);
        });
  
      cy.contains('.oxd-table-row', username)
        .find('button')
        .eq(1)
        .click();
  
      cy.contains('h6', 'Edit User')
        .should('be.visible');
    }
  
    verifyUserDetails(username, employeeName, role, status) {
      cy.contains('label', 'Username')
        .parent()
        .parent()
        .find('input')
        .should('have.value', username);
  
      cy.contains('label', 'Employee Name')
        .parent()
        .parent()
        .find('input')
        .should(($input) => {
          const actualName = $input.val().trim().replace(/\s+/g, ' ');
          expect(actualName).to.equal(employeeName);
        });
  
      cy.contains('label', 'User Role')
        .parent()
        .parent()
        .should('contain.text', role);
  
      cy.contains('label', 'Status')
        .parent()
        .parent()
        .should('contain.text', status);
    }
  }
  
  export default AdminUserPage;