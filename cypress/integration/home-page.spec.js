



  let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Home Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        movies = response.results
      })
  })
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  describe("Base tests", () => {
    describe("Home Page", () => {
        beforeEach(() => {
          cy.visit("/");
        });
      
        describe("Base test", () => {
          it("displays page header", () => {
            cy.get("h2").contains("No. Movies");
            cy.get(".badge").contains(20);
          });
        })
      })
  });
});
describe("By movie genre", () => {
  it("should display movies with the specified genre only", () => {
    const selectedGenreId = 35;
    const selectedGenreText = "Comedy";
    const matchingMovies = filterByGenre(movies, selectedGenreId);
    cy.get("select").select(selectedGenreText); 
    cy.get(".card").should("have.length", matchingMovies.length);
    cy.get(".card").each(($card, index) => {
      cy.wrap($card)
        .find(".card-title")
        .should("have.text", matchingMovies[index].title);
    });      
    describe("Filtering", () => {
        it("should only display movies with specific name", () => {
          let searchString = "Coco";
          let matchingMovies = filterByTitle(movies, searchString);
          cy.get("input").clear().type(searchString); // Enter Coco in text box
          cy.get(".card").should("have.length", matchingMovies.length);
        });
      });
  });
});


