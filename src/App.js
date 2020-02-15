import React from "react";
import "./App.css";
import Nav from "./Nav";
import Warframe from "./Warframe";
import Sentinels from "./Sentinels";
import Archwings from "./Archwings";
import Primarys from "./Primarys";
import Secondarys from "./Secondarys";
import Melees from "./Melees";
import Mods from "./Mods";
import ArchGuns from "./ArchGuns";
import ArchMelees from "./ArchMelees";
import Quests from "./Quests";
import Enemys from "./Enemys";
import Pets from "./Pets";
import Relics from "./Relics";
import Gears from "./Gears";
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
          <Route path="/mod" component={Mods} />
          <Route path="/arch-gun" component={ArchGuns} />
          <Route path="/arch-melee" component={ArchMelees} />
          <Route path="/quest" component={Quests} />
          <Route path="/enemy" component={Enemys} />
          <Route path="/pet" component={Pets} />
          <Route path="/relic" component={Relics} />
          <Route path="/gear" component={Gears} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <section className="hero">
      <div className="hero-inner">
        <h1>Warframe</h1>
        <h2>
          is a free-to-play action role playing third-person shooter multiplayer
          <br />
          online game developed and published by Digital Extremes. ... The Tenno
          <br />
          use their powered Warframes along with a variety of weapons and
          <br />
          abilities to complete missions.
        </h2>
        <a href="https://www.warframe.com/game" className="btn">
          More Info
        </a>
      </div>
    </section>
  </div>
);

export default App;
