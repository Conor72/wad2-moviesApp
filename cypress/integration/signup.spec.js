let movies;    // List of movies from TMDB
var val = Math.floor(1000 + Math.random() * 9000);      //Creates a random 4 digit number to ensure every user created for this test is unique


/* eslint-disable */
  beforeEach(() => {
    cy.visit("http://localhost:3000/signup")
  });

  
  describe("Signup", () => {
    it("Should successfully sign up user and change to a movies page", () => {
      cy.get('#email').type('newaccount' + val + '@gmail.com')    //Adds the 4 digit value between newaccount and @gmail.com
      cy.get('#password').type('123456')
      cy.get('#password-confirm').type('123456')
      cy.get('.btn').click() 
      cy.url().should('not.include', '/signup')
      
    });
  });
  