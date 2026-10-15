
import LoginPage from '../pages/LoginPage';
import AdminUserPage from '../pages/AdminUserPage';

describe('OrangeHRM User Management', () => {
  const loginPage = new LoginPage();
  const adminUserPage = new AdminUserPage();

  const username = `qauser_${Date.now()}`;
  const password = 'Test@12345';

  it('should create a new user and verify the record', () => {
    cy.env(['ADMIN_USERNAME', 'ADMIN_PASSWORD']).then((env) => {
      // Admin login
      loginPage.login(
        env.ADMIN_USERNAME,
        env.ADMIN_PASSWORD
      );

      // Open Admin and Add User form
      adminUserPage.openAdminModule();
      adminUserPage.clickAddUser();

      // Fill user details
      adminUserPage.selectUserRole('ESS');
      adminUserPage.enterEmployeeName('Amelia');
      adminUserPage.selectStatus('Enabled');
      adminUserPage.enterUsername(username);
      adminUserPage.enterPassword(password);
      adminUserPage.confirmPassword(password);

      // Save new user
      adminUserPage.saveUser();

      // Verify successful save
      cy.contains('Successfully Saved').should('be.visible');

      // Search for the created user
      adminUserPage.searchUser(username);

      // Verify that the new user appears in the results
      cy.contains('.oxd-table-row', username)
        .should('be.visible')
        .and('contain', 'ESS')
        .and('contain', 'Enabled');
    });
  });
});
