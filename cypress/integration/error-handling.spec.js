let movies;    // List of movies from TMDB

/* eslint-disable */
  beforeEach(() => {
    cy.visit("http://localhost:3000/login")
  });


  it("Should give an alert when incorrect password is entered", () => {
    cy.visit("http://localhost:3000/login")
    cy.get('#email').type('test@gmail.com')
    cy.get('#password').type('121212')      //invalid password
    cy.get('.btn').click()  
    cy.get('.alert').contains('Failed to log in') 

  });
    

  it("Should give an alert when incorrect email is entered", () => {
    cy.visit("http://localhost:3000/login")
    cy.get('#email').type('test')           //Does not include @ symbol for email
    cy.get('#password').type('123456')      
    cy.get('.btn').click()  
    cy.get('.alert').contains('Failed to log in') 

  });


