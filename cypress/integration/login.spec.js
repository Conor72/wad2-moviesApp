let movies;    // List of movies from TMDB

/* eslint-disable */
  beforeEach(() => {
    cy.visit("http://localhost:3000/login")
  });

  
  describe("Login", () => {
    it("Should login when email and password is entered and redirect to profile page", () => {
      cy.get('#email').type('test@gmail.com')
      cy.get('#password').type('123456')
      cy.get('.btn').click() 
      cy.url().should('include', '/dashboard')
      
    });
  });