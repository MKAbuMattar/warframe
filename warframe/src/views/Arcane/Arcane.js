import React, { Component } from 'react'
import axios from 'axios'
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator'
import MetaData from './Arcane.json'
import Loader from '../../components/Loader/Loader'
import ArcaneCards from '../../components/ArcaneCards/ArcaneCards'
import { Grid, Box, Title } from '../../assets/Style/Style'

export default class Arcane extends Component {

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
      const url = `${process.env.REACT_APP_API_URL}arcane`
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
                <Title>Arcane</Title>
                {this.state.data &&
                  <>
                    <ArcaneCards
                      arcane={this.state.data}
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
