import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Weather from './Weather';

const Home = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* Create navigation links */}
            <li>
              <Link to="/weather">Home</Link>
            </li>
            <li>
              <Link to="/news">About</Link>
            </li>
            <li>
              <Link to="/sports">Other Section</Link>
            </li>
          </ul>
        </nav>

        {/* Define routes */}
        <Switch>
          <Route exact path="/weather" component={Weather} />
          {/* <Route path="/about" component={About} />
          <Route path="/other" component={OtherSection} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default Home;
