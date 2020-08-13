import React from 'react';
import Navbar from '../Components/nav';
import Main from './index';
import ConversorPage from './Conversor';
import BlogPage from './Blog';

import { Switch, Route, Router } from '../util/router';
import SinPagina from './not-found.js';
import Footer from '../Components/footer';


function App() {
  return (

      <Router>
        <>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/Conversor' component={ConversorPage} />
            <Route exact path='/Blog' component={BlogPage} />
            <Route component={SinPagina} />
          </Switch>
          <Footer></Footer>
        </>
      </Router>

  );
}

export default App;
