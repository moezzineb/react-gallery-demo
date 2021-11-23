import * as React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Store from './contexts/StoreContext';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Collections from './pages/Collections';
import SingleCollection from './pages/SingleCollection';
import { SRLWrapper } from 'simple-react-lightbox';
import { SingleImage } from './pages/SingleImage';

const App = () => {
  return (
    <Store>
      <SRLWrapper>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/image/:slug">
              <SingleImage />
            </Route>
            <Route path="/collections/:slug">
              <SingleCollection />
            </Route>
            <Route path="/collections">
              <Collections />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </SRLWrapper>
    </Store>
  );
};

export default App;
