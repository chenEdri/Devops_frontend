import React, { Component } from "react"
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Header } from './cmps/Header.jsx'
import { Footer } from './cmps/Footer.jsx';
import { ItemApp } from './pages/item/ItemApp.jsx';
import { Stats } from "./pages/Stats.jsx";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="/admin" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/admin" component={ItemApp} />
            <Route path="/Stats" component={Stats} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

