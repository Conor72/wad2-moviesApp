# wad2-moviesApp
Movies Web application made with react and using the TMDb API.


# Assignment 1 - ReactJS app.

Name: Conor Brett

## Features.
 
 + Feature 1 - New page for popular movies
 + Feature 2 - New page for now playing movies
 + Feature 3 - New page for top rated movies
 + Feature 4 - Firebase auth login 
 + Feature 5 - Firebase auth sign up
 + Feature 6 - Profile page that display users email
 + Feature 7 - An update profile page that allows the user to change their email and/or password.
 + Feature 8 - Pages that are only viewable to a user that is logged in.

## Setup requirements (If required).

 + A firebase.config file will have to be created at this path - src\components\auth\firebase.config.js - You will have to create a firebase project and add in the config details such as apiKey which will then allow login and signup to work. (This file is in the .gitignore because firebase config file is not to be shared online

## API Data Model.

+ https://api.themoviedb.org/3/movie/popular?api_key - Get a list of Popular Movies.
+ https://api.themoviedb.org/3/movie/now_playing?api_key - Get a list of Now Playing Movies.
+ https://api.themoviedb.org/3/movie/top_rated?api_key - Get Top Rated Movies.

## App Design.

### UI Design.


![][UI - Home screen]






## Routing.

+ / (public) - Home page, displays a list of movies, if you click anything on the page you will be redirected to the Login Page.
+ /signup - (public) - Allows a new user to create an account and login to access the website
+ /login (public) - Allows a user to login to their existing account and access the website


+ /movies/upcoming - (protected - Redirected to Login Page if you try to access with out being signed in) - Displays upcoming movies.
+ /movies/popular - (protected) - Displays popular movies.
+ /movies/nowPlaying - (protected) - Displays now playing movies.
+ /movies/topRated - (protected) - Displays top rated movies.
+ /movies/favorites - (protected) - Displays a list of favourite movies added by the user.
+ /movies/watchlist - (protected) - Displays a 'watch list' of movies that the user has added.
+ /dashboard - (protected) - Displays a users email address , allows them access to update their profile and allows the user to log out of account.
+ /update-profile - (protected) - Allows user to change their email address and/or password.
+ /movies/:id eg. /movies/531219 - (protected) - Details page of a specific movie that shows info such as runtime and synopsis.
+ /reviews/form - (protected) - Page for writing a review of a specific movie.



### Data hyperlinking.


![][DataHyperlinking]
> Placeholder

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

 +Firebase Authentification - src\components\auth
 


---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Conor Brett

## App Features.

[Document each new feature/page in your Movies Fan app, including: Feature Name; Its objective/purpose; The associated test file; a screenshot of its UI.]
e,g,
 
+ Movie Details page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie.

Tests: cypress/integration/movieDetails.spec.js 

![][movieDetail]


## Testing.

Cypress Dashboard URL: https://dashboard.cypress.io/projects/fccafy/runs/7/overview

After having trouble with GitLab I decided to switch to use Cypress Integrated GitHub


CYPRESS DASHBOARD SCREENSHOT


### Advanced Testing (If required).

+ cypress/integration/error-handling.spec.js - Test when incorrect password is entered + Test to make sure an alert pops up when an incorrect email is entered
+ cypress/integration/protected-routes.spec.js - Test navigation to every page when logged in (using custom command) , then test navigation to every page when not signed in and ensure the user gets redirected to login page.
+ cypress/integration/stay-loggedIn-after-refresh.spec.js - Test that the user stays logged in even after a page is refreshed

## Independent learning (If relevant).

[ Itemize each technologies/techniques used in your project that were not covered in the lectures/labs. Provide the necessary evidence of their use (e,g, project file names, screenshots, service URL, etc)

 + Custom cypress commands - /cypress/support/commands.js - Two of these commands are then used in /cypress/integration/protected-routes.spec.js
 + Cypress integrated with Github CYPRESS INTEGRATED SCREENSHOT HERE
 
 
## References.

+ https://github.com/msmps/cypress-layout-inspector - cypress-layout-inspector tutorial
+ https://www.youtube.com/watch?v=8r1Pb6Ja90o - Using firebase to upload images
+ https://www.youtube.com/watch?v=PKwu15ldZ7k&t - https://github.com/WebDevSimplified/React-Firebase-Auth - Firebase Auth


---------------------------------

[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png
