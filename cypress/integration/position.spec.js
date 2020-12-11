/* eslint-disable */

beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });


  it('All Movie cards should have width > than 50px', () => {
    cy.get('.card').should('have.width.gt', 50);
});

it('Body of movie card should have height less than 166px', () => {
    cy.get('.card-body').should('have.height.gt', 100);
    cy.get('.card-body').should('have.height.lt', 166);
    cy.get('.card-body').should('have.height.lt', 166);
    cy.get('.card-body').should('have.height.within', 100, 300);
});
