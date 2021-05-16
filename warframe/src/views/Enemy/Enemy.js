import React, { Component } from 'react'
import axios from 'axios'
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator'
import MetaData from './Enemy.json'
import Loader from '../../components/Loader/Loader'
import EnemyCards from '../../components/EnemyCards/EnemyCards'
import { Grid, Box, Title } from '../../assets/Style/Style'

export default class Enemy extends Component {

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
      const url = `${process.env.REACT_APP_API_URL}enemy`
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
                <Title>Enemy</Title>
                {this.state.data &&
                  <>
                    <EnemyCards
                      enemy={this.state.data}
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
