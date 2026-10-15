# OrangeHRM User Management - Cypress Automation

## Project Overview

This project automates user creation, search and verification in the OrangeHRM demo application using Cypress.

**Application URL:** https://opensource-demo.orangehrmlive.com/

## Technology Stack

- Cypress 16.2.0
- JavaScript
- Node.js
- Page Object Model (POM)

## Test Scenario

1. Open the OrangeHRM demo application.
2. Log in using Admin credentials.
3. Navigate to the Admin module.
4. Create a new user with the required information.
5. Generate a unique username dynamically.
6. Search for the created user.
7. Open the Edit User page and verify the saved details.

## Project Structure

```text
cypress/
├── e2e/
│   └── user-management.cy.js
├── pages/
│   ├── LoginPage.js
│   └── AdminUserPage.js
└── support/

cypress.config.js
package.json
package-lock.json
README.md
.gitignore
```

## Setup

Clone the repository:

```bash
git clone https://github.com/ishrakahmad/orangehrm-cypress-assessment.git
cd orangehrm-cypress-assessment
npm install
```

## Environment Variables

Configure Admin credentials in your terminal. Do not hardcode credentials in test files or commit secrets.

```bash
export CYPRESS_ADMIN_USERNAME='your_admin_username'
export CYPRESS_ADMIN_PASSWORD='your_admin_password'
```

Use the credentials provided by the OrangeHRM demo application.

## Run Tests

Run Cypress in headless mode:

```bash
npx cypress run
```

Open the Cypress Test Runner:

```bash
npx cypress open
```

## Verification

The automated test verifies:

- Successful Admin login
- User creation
- Unique username generation
- User search
- Username, User Role, Employee Name and Status on the Edit User page

**UI note:** The current demo interface does not display a separate User ID column. The test uses the Edit action to verify the saved user details.

## Author

Ishrak Ahmad

GitHub: https://github.com/ishrakahmad
