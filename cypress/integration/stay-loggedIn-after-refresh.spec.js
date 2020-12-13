let movies;    // List of movies from TMDB

/* eslint-disable */
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  describe("Logging In", () => {
    it("Should login when email and password is entered and redirect to profile page", () => {
      cy.Login();
      
    });
  });

  describe("Navigate to Home Page, refesh page, navigate to profile page, refresh page", () => {
    it("Should navigate to Home Page and refresh page", () => {
      cy.get("nav").get('#collasible-nav-dropdown').click().get("a").find("a").eq(0).click();
      cy.url().should("include", `http://localhost:3000/`);
      cy.reload();
    });
    
    it("Should navigate to Profile Page & refresh", () => {
  
        cy.get("nav").get('#collasible-nav-dropdown').get("a").eq(3).click();
        cy.url().should("include", `/dashboard`);               //ensure it has navigated
        cy.reload();                                            //Refresh once more to be sure 
        cy.url().should("include", `/dashboard`);               //Check that it still has not redirected the user back to the login page
      });
});

