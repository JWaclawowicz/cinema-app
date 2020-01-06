import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tickets from '../pages/tickets/Tickets';
import MoviesList from '../pages/moviesList/MoviesList';
import MovieView from '../pages/movieView/MovieView'
//import DateMovie from '../dateMovie/DateMovie'
//import TimeMovie from '../pages/timeMovie/TimeMovie'

// import Halls from '../pages/halls/Halls';
import './App.css';
import TimeMovie from '../pages/timeMovie/TimeMovie';
import DateMovie from '../pages/dateMovie/DateMovie';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path='/'
            render={props => (
              <React.Fragment>
                <div className="ui link cards">
                <MoviesList></MoviesList>
                </div>
              </React.Fragment>
            )}
          />
          <Route path='/movie' component={MovieView}/>
          <Route path='/time' component={MoviesList}/>
          <Route path='/tickets' component={Tickets} />
        </div>
      </Router>
    );
  }
}

export default App;