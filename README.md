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
+ https://api.themoviedb.org/3/discover/movie?api_key - Discover Movies
+ https://api.themoviedb.org/3/genre/movie/list?api_key - Get movie genres.
+ https://api.themoviedb.org/3/movie/${id}/reviews?api_key - Get movie reviews.
+ https://api.themoviedb.org/3/movie/upcoming?api_key - Get upcoming movies.

## App Design.

### UI Design.

Home Page of the website. Displays movies and it is the only movies page viewable for users that are not signed in
![](https://github.com/Conor72/wad2-moviesApp/blob/master/public/UI%20-%20Home%20screen.png)

Example of a clickable movie card which includes a semantic ui hover button. The edges of the card and image have been rounded.
![](https://github.com/Conor72/wad2-moviesApp/blob/master/public/UI%20-%20Movie%20Card.png)

Movie card when a user is about to add the movie to their watch list. When hovering over the button it changes colour.
![](https://github.com/Conor72/wad2-moviesApp/blob/master/public/UI%20-%20Movie%20Card%20hovering%20over%20button.png)

Navbar with a dropdown menu for navigation to movie pages & favourites + watch list pages.
![](https://github.com/Conor72/wad2-moviesApp/blob/master/public/UI%20-%20Dropdown%20Navbar.png)

Bootstrap navbar when on a smaller resolution or a mobile phone.
![](https://github.com/Conor72/wad2-moviesApp/blob/master/public/UI%20-%20Bootstrap%20Navbar%201.png)

Expanding the navbar.
![](https://github.com/Conor72/wad2-moviesApp/blob/master/public/UI%20-%20Bootstrap%20Navbar%202.png)

Using the dropdown menu.
![](https://github.com/Conor72/wad2-moviesApp/blob/master/public/UI%20-%20Bootstrap%20Navbar%203.png)

Sign Up Page.
![](https://github.com/Conor72/wad2-moviesApp/blob/master/public/UI%20-%20Sign%20Up.png)

Login Page.
![](https://github.com/Conor72/wad2-moviesApp/blob/master/public/UI%20-%20Login.png)

Profile Page.
![](https://github.com/Conor72/wad2-moviesApp/blob/master/public/UI%20-%20Profile.png)


## Routing.

+ / (public) - Home page, displays a list of movies, if you click anything on the page you will be redirected to the Login Page.
+ /signup - (public) - Allows a new user to create an account and login to access the website
+ /login (public) - Allows a user to login to their existing account and access the website

+ (Protected Routes redirects to Login Page if you try to access without being signed in)
+ /movies/upcoming - (protected ) - Displays upcoming movies.
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

If you already have an account and you find yourself on the Sign Up page you can click this link to bring you directly to the login page.
![](https://github.com/Conor72/wad2-moviesApp/blob/master/public/Data%20HyperLinking%20-%20Go%20to%20Login%20Page%20from%20Sign%20Up%20page.png)

If you're on the Login page and don't have an account you can click this link to bring you to the Sign Up page.
![](https://github.com/Conor72/wad2-moviesApp/blob/master/public/Data%20HyperLinking%20-%20Go%20to%20Sign%20Up%20page%20from%20login%20page.png)


## Independent learning (If relevant).

 + Firebase Authentification - src\components\auth
 + Public and Private routing
 


---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Conor Brett

## App Features.

 + Feature 1 - New page for popular movies - cypress\integration\popularMovies-page.spec.js
 + Feature 2 - New page for now playing movies
 + Feature 3 - New page for top rated movies
 + Feature 4 - Firebase auth login - cypress\integration\login.spec.js
 + Feature 5 - Firebase auth sign up - cypress\integration\signup.spec.js
 + Feature 6 - Profile page that display users email 
 + Feature 7 - An update profile page that allows the user to change their email and/or password.
 + Feature 8 - Pages that are only viewable to a user that is logged in. - cypress\integration\protected-routes.spec.js
 + Feature 8 - Error Handling - cypress\integration\error-handling.spec.js
 + Feature 9 - Staying logged in after refresh - cypress\integration\stay-loggedIn-after-refresh.spec.js
 + Feature 10 - Layout inspector - cypress\integration\position.spec.js



## Testing.

Cypress Dashboard URL: https://dashboard.cypress.io/projects/fccafy/runs/7/overview

After having trouble with GitLab I decided to switch to use Cypress Integrated GitHub to run my tests

![](https://github.com/Conor72/wad2-moviesApp/blob/master/public/Cypress%20Dashboard.png)


### Advanced Testing (If required).

+ cypress/integration/protected-routes.spec.js - Test navigation to every page when logged in (using custom command) , then test navigation to every page when not signed in and ensure the user gets redirected to login page.
+ cypress/integration/error-handling.spec.js - Test when incorrect password is entered + Test to make sure an alert pops up when an incorrect email is entered
+ cypress/integration/stay-loggedIn-after-refresh.spec.js - Test that the user stays logged in even after a page is refreshed

## Independent learning (If relevant).

 + Custom cypress commands - /cypress/support/commands.js - Two of these commands are then used in /cypress/integration/protected-routes.spec.js
 + Cypress integration with Github
 + Firebase Authentification - src/components/auth
 + Public and Private routing
 + Cypress layout inspect - cypress/integration/position.spec.js
 
 
## References.

+ https://github.com/msmps/cypress-layout-inspector - cypress-layout-inspector tutorial
+ https://www.youtube.com/watch?v=8r1Pb6Ja90o - Using firebase to upload images
+ https://www.youtube.com/watch?v=PKwu15ldZ7k&t - https://github.com/WebDevSimplified/React-Firebase-Auth - Firebase Auth

