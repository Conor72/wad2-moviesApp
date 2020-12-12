import 'cypress-layout-inspector/add-support';

/* eslint-disable */
Cypress.Commands.add("Login" , () => {

    cy.visit("http://localhost:3000/login")
      cy.get('#email').type('test@gmail.com')
      cy.get('#password').type('123456')
      cy.get('.btn').click() 
      cy.url().should('include', '/dashboard')  
})


Cypress.Commands.add("LogOut" , () => {

    cy.get("nav").get('#collasible-nav-dropdown').get("a").eq(3).click();
    cy.url().should("include", `/dashboard`);
    cy.get('.btn').eq(1).click() 
    cy.url().should("include", `/login`);

})