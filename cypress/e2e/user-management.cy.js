
import LoginPage from '../pages/LoginPage';
import AdminUserPage from '../pages/AdminUserPage';

describe('OrangeHRM User Management', () => {
  const loginPage = new LoginPage();
  const adminUserPage = new AdminUserPage();

  const username = `qauser_${Date.now()}`;
  const password = 'Test@12345';

  it('should create a new user and verify the record', () => {
    cy.env(['ADMIN_USERNAME', 'ADMIN_PASSWORD']).then((env) => {
      
      loginPage.login(
        env.ADMIN_USERNAME,
        env.ADMIN_PASSWORD
      );

      
      adminUserPage.openAdminModule();

      
      adminUserPage.clickAddUser();

      
      adminUserPage.selectUserRole('ESS');
      adminUserPage.enterEmployeeName('Amelia');
      adminUserPage.selectStatus('Enabled');
      adminUserPage.enterUsername(username);
      adminUserPage.enterPassword(password);
      adminUserPage.confirmPassword(password);

      
      adminUserPage.saveUser();

      
      adminUserPage.searchUser(username);
      adminUserPage.verifyUserRecord(username);
    });
  });
});
