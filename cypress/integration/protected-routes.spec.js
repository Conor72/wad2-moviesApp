let movies;    // List of movies from TMDB



//This test will display that only users that are LOGGED in are able to access the protected routes. Starts with logging in a user, navigating to all pages, then 
//logs out and attempts to navigate to view the same pages, but will instead be redirected to login page because user is not logged in.


/* eslint-disable */
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });



  describe("Logging In", () => {
    it("Should login when email and password is entered and redirect to profile page", () => {
      cy.Login()
      
    });
  });





  describe("Navbar navigation while logged in", () => {
    it("Should navigate to Home Page", () => {
  
      cy.get("nav").get('#collasible-nav-dropdown').click().get("a").find("a").eq(0).click();
      cy.url().should("include", `http://localhost:3000/`);
    });
  
    it("Should navigate to Upcoming Movies", () => {
  
      cy.get("nav").get('#collasible-nav-dropdown').click().get("a").find("a").eq(1).click();
      cy.url().should("include", `/upcoming`);
    });
  
  
    it("Should navigate to Now Playing Movies", () => {
  
      cy.get("nav").get('#collasible-nav-dropdown').click().get("a").find("a").eq(2).click();
      cy.url().should("include", `/nowPlaying`);
    });
  
  
    it("Should navigate to Top Rated Movies", () => {
  
      cy.get("nav").get('#collasible-nav-dropdown').click().get("a").find("a").eq(3).click();
      cy.url().should("include", `/topRated`);
    });
  
  
    it("Should navigate to Favourites Page", () => {
  
      cy.get("nav").get('#collasible-nav-dropdown').click().get("a").find("a").eq(4).click();
      cy.url().should("include", `/favorites`);
    });
  
  
    it("Should navigate to Watch List Page", () => {
  
      cy.get("nav").get('#collasible-nav-dropdown').click().get("a").find("a").eq(5).click();
      cy.url().should("include", `/watchlist`);
    });
  
  
    it("Should navigate to Profile Page", () => {
  
      cy.get("nav").get('#collasible-nav-dropdown').get("a").eq(3).click();
      cy.url().should("include", `/dashboard`);
    });
  
  
  
    });








        describe("Logging out", () => {


   
            it("Sign out if an acocunt is signed in", () => {
          
              cy.LogOut()
          
            });
          
            });





            describe("Navbar navigation while NOT logged in", () => {

                it("Should navigate to Home Page (Only page viewable to non-signed in users)", () => {
       
       
               cy.get("nav").get('#collasible-nav-dropdown').click().get("a").find("a").eq(0).click();
               cy.url().should("include", `http://localhost:3000/`);
             });
       
             it("Should attempt to navigate to Upcoming Movies & be redirected to Login Page", () => {
   
               cy.get("nav").get('#collasible-nav-dropdown').click().get("a").find("a").eq(1).click();
               cy.url().should("include", `/login`);
             });
       
             it("Should attempt to navigate to Now Playing Movies & be redirected to Login Page", () => {
   
               cy.get("nav").get('#collasible-nav-dropdown').click().get("a").find("a").eq(2).click();
               cy.url().should("include", `/login`);
             });
   
   
             it("Should attempt to navigate to Top Rated Movies & be redirected to Login Page", () => {
   
               cy.get("nav").get('#collasible-nav-dropdown').click().get("a").find("a").eq(3).click();
               cy.url().should("include", `/login`);
             });
       
       
   
             it("Should attempt to navigate to Favorites Movies Page & be redirected to Login Page", () => {
   
               cy.get("nav").get('#collasible-nav-dropdown').click().get("a").find("a").eq(4).click();
               cy.url().should("include", `/login`);
             });
           
           
             it("Should attempt to navigate to Watch List Page & be redirected to Login Page", () => {
           
               cy.get("nav").get('#collasible-nav-dropdown').click().get("a").find("a").eq(5).click();
               cy.url().should("include", `/login`);
             });
       
           });
   
   


  