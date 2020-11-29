  
import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import MoviesContextProvider from "../../contexts/moviesContext";
import GenresContextProvider from "../../contexts/genresContext";
import SiteHeader from '../../components/siteHeader';
import HomePage from "../../pages/homePage";
import MoviePage from '../../pages/movieDetailsPage'
import FavoriteMoviesPage from '../../pages/favoritesMoviesPage'       
import UpcomingMoviesPage from '../../pages/upcomingMoviesPage'  // NEW
import MovieReviewPage from "../../pages/addMovieReviewPage";
import WatchListMoviesPage from "../../pages/watchListMoviesPage";
import AddMovieReviewPage from '../../pages/addMovieReviewPage';
import TopRatedMoviesPage from '../../pages/topRatedMoviesPage';
import NowPlayingMoviesPage from '../../pages/nowPlayingMoviesPage';


function App() {
  return (
    <Router>
    <div className="jumbotron">
    <SiteHeader /> 
    <div className="container-fluid">
       
          <AuthProvider>
          <MoviesContextProvider> 
           <GenresContextProvider>  
            <Switch>
            <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
              <PrivateRoute exact path="/movies/watchlist" component={WatchListMoviesPage} />
              <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <PrivateRoute exact path="/movies/nowPlaying" component={NowPlayingMoviesPage} />
              <PrivateRoute exact path="/movies/topRated" component={TopRatedMoviesPage} />
              <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
              <PrivateRoute path="/movies/:id" component={MoviePage} />
              <PrivateRoute path="/" component={HomePage} />
             
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
            </GenresContextProvider>    
        </MoviesContextProvider> 
          </AuthProvider>
       
        </div>
      </div>
      </Router>
  );
};

export default App



