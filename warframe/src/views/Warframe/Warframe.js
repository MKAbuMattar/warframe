import React, { Component } from 'react'
import axios from 'axios'
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator'
import MetaData from './Warframe.json'
import Loader from '../../components/Loader/Loader'
import WarframeCards from '../../components/WarframeCards/WarframeCards'
import { Grid, Box, Title } from '../../assets/Style/Style'

export default class Warframe extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: '',
      data: [],
    }
  }

  componentDidMount() {
    this.setState({
      loading: true
    })

    this.getData()
  }

  getData = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}warframe`
      const request = await axios.get(url)

      this.setState({
        data: request.data,
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
                {this.state.data &&
                  <>
                    <WarframeCards
                      warframe={this.state.data}
                    />
                  </>
                }
              </Box>
            </Grid>
          </>
        )}
      </>
    )
  }
}
