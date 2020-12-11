/* eslint-disable */
Cypress.Commands.add("Login" , () => {

    cy.visit("http://localhost:3000/login")
      cy.get('#email').type('test@gmail.com')
      cy.get('#password').type('123456')
      cy.get('.btn').click() 
      cy.url().should('include', '/dashboard')



})