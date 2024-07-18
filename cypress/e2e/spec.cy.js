describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationintesting.online/#/admin');
    cy.get('[data-testid=username]').type('admin');
    cy.get('[data-testid=password]').type('password');
    cy.get('[data-testid="submit"]').click();
    cy.get('#frontPageLink').should('be.visible');
  });
});
