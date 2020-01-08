import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tickets from '../pages/tickets/Tickets';
import MoviesList from '../pages/moviesList/MoviesList';
import MovieView from '../pages/movieView/MovieView';
import Seats from '../pages/seats/Seats';
//import DateMovie from '../dateMovie/DateMovie'
//import TimeMovie from '../pages/timeMovie/TimeMovie'
//import Halls from '../pages/halls/Halls';
import './App.css';
import ShowTicket from '../pages/tickets/ShowTicket';
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
          <Route path='/time' component={ShowTicket}/>
          <Route path='/tickets' component={Tickets} />
           {/* <Route path='/halls' component={Halls} />  */}
          <Route path='/seats' component={Seats} />
          <Route path='/showticket' component={ShowTicket} />
        </div>
      </Router>
    );
  }
}

export default App;