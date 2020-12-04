// React
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
// Components
import NavigationBar from "./components/NavigationBar"
//Pages
import Homepage from "./pages/Homepage"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
//CSS
import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/projects" component={Projects} />
        <Routh path="/resume" component={Resume} />
      </Switch>
    </HashRouter>
  );
}