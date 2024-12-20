describe('Login Page Tests', function () {
  before(() => {
    console.log('Running tests on the login page');
  });

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  afterEach(() => {
  });

  after(() => {
    console.log('All tests completed');
  });

  it('Should login successfully with valid credentials', function () {
    cy.get('input#username')
      .type('tomsmith')

    cy.get('input#password')
      .type('SuperSecretPassword!')

    cy.get('button[type="submit"]')
      .click();

    cy.url().should('include', '/secure');
    cy.get('div#flash').should('contain', 'You logged into a secure area!');
  });
});

describe('Forgot Password Page Tests', function () {
  before(() => {
    console.log('Running tests on the Forgot Password page');
  });

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/forgot_password');
  });

  afterEach(() => {
  });

  after(() => {
    console.log('All tests completed');
  });

  it('Should request a password reset with valid email', function () {
    cy.get('input#email')
      .type('test@example.com')

    cy.get('button[type="submit"]')
      .click();

    cy.get('body > h1:nth-child(1)').should('contain', 'Internal Server Error');
  });
});



