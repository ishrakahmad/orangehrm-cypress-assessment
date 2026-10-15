import LoginPage from '../pages/LoginPage';
import AdminUserPage from '../pages/AdminUserPage';

describe('OrangeHRM User Management', () => {
  const loginPage = new LoginPage();
  const adminUserPage = new AdminUserPage();

  
  const username = `qauser_${Date.now()}`;
  const password = `Test@${Date.now()}`;
  const employeeSearchText = 'Amelia';
  const employeeName = 'Amelia Brown';
  const userRole = 'ESS';
  const userStatus = 'Enabled';

  it('should create, search and verify a new user', () => {
    cy.env(['ADMIN_USERNAME', 'ADMIN_PASSWORD']).then((env) => {
      loginPage.login(env.ADMIN_USERNAME, env.ADMIN_PASSWORD);

      adminUserPage.openAdminModule();

      adminUserPage.clickAddUser();
      adminUserPage.selectUserRole(userRole);
      adminUserPage.enterEmployeeName(employeeSearchText, employeeName);
      adminUserPage.selectStatus(userStatus);
      adminUserPage.enterUsername(username);
      adminUserPage.enterPassword(password);
      adminUserPage.confirmPassword(password);
      adminUserPage.saveUser();

      adminUserPage.searchUser(username, userRole, userStatus);

      adminUserPage.clickEditUser(username);

      adminUserPage.verifyUserDetails(username, employeeName, userRole, userStatus);
    });
  });
});