import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MeatDecorator from './utilities/MeatDecorator/MeatDecorator'
import MetaData from './App.json'

//components
import Nav from './components/Nav/Nav'
import Background from './components/Background/Background'

//views
import Index from './views/Index/Index'
import Warframe from './views/Warframe/Warframe'
import Primary from './views/Primary/Primary'
import Secondary from './views/Secondary/Secondary'
import Melee from './views/Melee/Melee'
import Necrameche from './views/Necrameche/Necrameche'
import Archwing from './views/Archwing/Archwing'
import ArchGun from './views/ArchGun/ArchGun'
import ArchMelee from './views/ArchMelee/ArchMelee'
import Pet from './views/Pet/Pet'
import Sentinel from './views/Sentinel/Sentinel'
import SentinelWeapon from './views/SentinelWeapon/SentinelWeapon'
import Mod from './views/Mod/Mod'
import Enemy from './views/Enemy/Enemy'
import Quest from './views/Quest/Quest'
import Gear from './views/Gear/Gear'
import Arcane from './views/Arcane/Arcane'
import Glyph from './views/Glyph/Glyph'
import Resource from './views/Resource/Resource'
import Page404 from './views/Page404/Page404'

export default class App extends Component {

  render() {

    return (
      <>
        <BrowserRouter>
          <MeatDecorator
            title={MetaData.title}
            description={MetaData.description}
          />
          <Background />
          <Nav />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/warframe" exact component={Warframe} />
            <Route path="/primary" exact component={Primary} />
            <Route path="/secondary" exact component={Secondary} />
            <Route path="/melee" exact component={Melee} />
            <Route path="/necrameche" exact component={Necrameche} />
            <Route path="/archwing" exact component={Archwing} />
            <Route path="/archGun" exact component={ArchGun} />
            <Route path="/archMelee" exact component={ArchMelee} />
            <Route path="/pet" exact component={Pet} />
            <Route path="/sentinel" exact component={Sentinel} />
            <Route path="/sentinelWeapon" exact component={SentinelWeapon} />
            <Route path="/mod" exact component={Mod} />
            <Route path="/enemy" exact component={Enemy} />
            <Route path="/quest" exact component={Quest} />
            <Route path="/gear" exact component={Gear} />
            <Route path="/arcane" exact component={Arcane} />
            <Route path="/glyph" exact component={Glyph} />
            <Route path="/resource" exact component={Resource} />
            <Route path="/*" component={Page404} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}
