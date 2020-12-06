let movies;    // List of movies from TMDB

  beforeEach(() => {
    cy.visit("http://localhost:3000/signup")
  });

  
  describe("Signup", () => {
    it("Should successfully sign up user and change to a movies page", () => {
      cy.get('#email').type('newaccount@gmail.com')
      cy.get('#password').type('123456')
      cy.get('#password-confirm').type('123456')
      cy.get('.btn').click() 
      cy.url().should('not.include', '/signup')
      
    });
  });
  