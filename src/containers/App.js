import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchData } from '../actions'
import { Line } from 'react-chartjs'
import Price from '../components/Price'

const refreshInterval = 30000

class App extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    values: PropTypes.array.isRequired,
    labels: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    trend: PropTypes.string,
    difference: PropTypes.number
  }

  componentDidMount() {
    const { dispatch } = this.props
    const intervalId = setInterval(() => dispatch(fetchData), refreshInterval)

    dispatch(fetchData)
    this.setState({intervalId: intervalId})
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch } = this.props
    dispatch(fetchData)
  }

  render() {
    const { isFetching, priceData, labels, values } = this.props
    const isEmpty = labels.length === 0 || values.length === 0

    return (
      <main className="container">
        {isEmpty
          ? (isFetching ? <h3 className="text-center">Loading...</h3> : <h3 className="text-center">Ooops, something went wrong.</h3>)
          : <section style={{ opacity: isFetching ? 0.5 : 1 }} className="row">
              <section className="col-sm-12 col-md-4">
                <i className="fa fa-refresh fa-spin"></i>
                <a className="label label-danger" onClick={this.handleRefreshClick}>Live</a>
                <h3>BTC/GBP</h3>
                <p>Page reloads every 30 seconds. Impatient? Click the live label!</p>
                <Price data={priceData} />
              </section>
              <section className="col-sm-12 col-md-8">
                <Line
                  options={{
                    responsive: true
                  }}
                  data={{
                    labels: [...labels],
                    datasets: [
                      {
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        data: [...values]
                      }
                    ]
                  }}
                />
              </section>
            </section>
        }
      </main>
    )
  }
}

const mapStateToProps = state => {
  const { isFetching, priceData, labels, values } = state || {
    isFetching: true,
    priceData: {},
    labels: [],
    values: []
  }

  return {
    isFetching,
    priceData,
    labels,
    values
  }
}

export default connect(mapStateToProps)(App)
