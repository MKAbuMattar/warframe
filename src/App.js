import React from "react";
import "./App.css";
import Nav from "./Nav";
import Warframe from "./Warframe";
import Sentinels from "./Sentinels";
import Archwings from "./Archwings";
import Primarys from "./Primarys";
import Secondarys from "./Secondarys";
import Melees from "./Melees";
import ArchGuns from "./ArchGuns";
import ArchMelees from "./ArchMelees";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/warframe" component={Warframe} />
          <Route path="/sentinel" component={Sentinels} />
          <Route path="/archwing" component={Archwings} />
          <Route path="/primary" component={Primarys} />
          <Route path="/secondary" component={Secondarys} />
          <Route path="/melee" component={Melees} />
          <Route path="/arch-gun" component={ArchGuns} />
          <Route path="/arch-melee" component={ArchMelees} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
