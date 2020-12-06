let movies;    // List of movies from TMDB

  beforeEach(() => {
    cy.visit("http://localhost:3000/login")
  });

  
  describe("Login", () => {
    it("Should login when email and password is entered and redirect to profile page", () => {
      let searchString = "test@gmail.com";
      cy.get('#email').type('test@gmail.com')
      cy.get('#password').type('123456')
      cy.get('.btn').click() 
      cy.url().should('include', '/dashboard')
      
    });
  });
