import React, { Component } from 'react'
import { Cards } from '../../assets/Style/Style'
import Card from '../../utilities/Card/Card'

export default class LandingPageCards extends Component {
  render() {
    return (
      <>
        <Cards>
          {this.props.warframe &&
            <Card
              name={this.props.warframe.name}
              imgSrc={this.props.warframe.imageName}
              alt={this.props.warframe.description}
            />
          }
          {this.props.primaryWeapon &&
            <Card
              name={this.props.primaryWeapon.name}
              imgSrc={this.props.primaryWeapon.imageName}
              alt={this.props.primaryWeapon.description}
            />
          }
          {this.props.secondaryWeapon &&
            <Card
              name={this.props.secondaryWeapon.name}
              imgSrc={this.props.secondaryWeapon.imageName}
              alt={this.props.secondaryWeapon.description}
            />
          }
          {this.props.meleeWeapon &&
            <Card
              name={this.props.meleeWeapon.name}
              imgSrc={this.props.meleeWeapon.imageName}
              alt={this.props.meleeWeapon.description}
            />
          }
        </Cards>
      </>
    )
  }
}
