import React, { Component } from 'react'
import axios from 'axios'
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator'
import MetaData from './Index.json'
import Loader from '../../components/Loader/Loader'
import LandingPageCards from '../../components/LandingPageCards/LandingPageCards'
import { Grid, Box, Title, SubTitle } from '../../assets/Style/Style'

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: '',
      normalWarframe: [],
      normalPrimaryWeapon: [],
      normalSecondaryWeapon: [],
      normalMeleeWeapon: [],
      primeWarframe: [],
      primePrimaryWeapon: [],
      primeSecondaryWeapon: [],
      primeMeleeWeapon: [],
    }
  }

  componentDidMount() {
    this.setState({
      loading: true
    })

    this.getWarframe()
  }

  getWarframe = async () => {
    try {
      const urlWarframe = `${process.env.REACT_APP_API_URL}warframe`
      const requestWarframe = await axios.get(urlWarframe)

      const nWarframe = []
      const pWarframe = []

      requestWarframe.data.map(result => {
        if ((result.name).toLowerCase() === `${process.env.REACT_APP_NORMAL_WARFRAME}`.toLowerCase()) {
          return (nWarframe.push(result))
        } else if ((result.name).toLowerCase() === `${process.env.REACT_APP_PRIME_WARFRAME}`.toLowerCase()) {
          return (pWarframe.push(result))
        } else {
          return ''
        }
      })

      const urlPrimaryWeapon = `${process.env.REACT_APP_API_URL}primary`
      const requestPrimaryWeapon = await axios.get(urlPrimaryWeapon)

      const nPrimaryWeapon = []
      const pPrimaryWeapon = []

      requestPrimaryWeapon.data.map(result => {
        if ((result.name).toLowerCase() === `${process.env.REACT_APP_PRIME_WARFRAME}`.toLowerCase()) {
          return (nPrimaryWeapon.push(result))
        } else if ((result.name).toLowerCase() === `${process.env.REACT_APP_PRIME_PRIMARY_WARFRAME}`.toLowerCase()) {
          return (pPrimaryWeapon.push(result))
        } else {
          return ''
        }
      })

      const urlSecondaryWeapon = `${process.env.REACT_APP_API_URL}secondary`
      const requestSecondaryWeapon = await axios.get(urlSecondaryWeapon)

      const nSecondaryWeapon = []
      const pSecondaryWeapon = []

      requestSecondaryWeapon.data.map(result => {
        if ((result.name).toLowerCase() === `${process.env.REACT_APP_NORMAL_SECONDARY_WARFRAME}`.toLowerCase()) {
          return (nSecondaryWeapon.push(result))
        } else if ((result.name).toLowerCase() === `${process.env.REACT_APP_PRIME_SECONDARY_WARFRAME}`.toLowerCase()) {
          return (pSecondaryWeapon.push(result))
        } else {
          return ''
        }
      })

      const urlMeleeWeapon = `${process.env.REACT_APP_API_URL}melee`
      const requestMeleeWeapon = await axios.get(urlMeleeWeapon)

      const nMeleeWeapon = []
      const pMeleeWeapon = []

      requestMeleeWeapon.data.map(result => {
        if ((result.name).toLowerCase() === `${process.env.REACT_APP_NORMAL_MELEE_WARFRAME}`.toLowerCase()) {
          return (nMeleeWeapon.push(result))
        } else if ((result.name).toLowerCase() === `${process.env.REACT_APP_PRIME_MELEE_WARFRAME}`.toLowerCase()) {
          return (pMeleeWeapon.push(result))
        } else {
          return ''
        }
      })

      this.setState({
        normalWarframe: nWarframe[0],
        normalPrimaryWeapon: nPrimaryWeapon[0],
        normalSecondaryWeapon: nSecondaryWeapon[0],
        normalMeleeWeapon: nMeleeWeapon[0],
        primeWarframe: pWarframe[0],
        primePrimaryWeapon: pPrimaryWeapon[0],
        primeSecondaryWeapon: pSecondaryWeapon[0],
        primeMeleeWeapon: pMeleeWeapon[0],
        loading: false,
        error: '',
      });
    } catch (err) {
      this.setState({
        loading: false,
        error: err
      })
    }
  }

  render() {
    return (
      <>
        <MeatDecorator
          title={MetaData.title}
          description={MetaData.description}
        />
        {this.state.loading ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            <Grid>
              <Box>
                <Title>Warframe</Title>
                <SubTitle>Last Warframe Added</SubTitle>
                <>
                  <LandingPageCards
                    warframe={this.state.normalWarframe}
                    primaryWeapon={this.state.normalPrimaryWeapon}
                    secondaryWeapon={this.state.normalSecondaryWeapon}
                    meleeWeapon={this.state.normalMeleeWeapon}
                  />
                </>
                <SubTitle>Last Warframe Prime Added</SubTitle>
                <>
                  <LandingPageCards
                    warframe={this.state.primeWarframe}
                    primaryWeapon={this.state.primePrimaryWeapon}
                    secondaryWeapon={this.state.primeSecondaryWeapon}
                    meleeWeapon={this.state.primeMeleeWeapon}
                  />
                </>
              </Box>
            </Grid>
          </>
        )}
      </>
    )
  }
}
