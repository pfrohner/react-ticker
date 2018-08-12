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
    const { isFetching, data, labels, values, trend, difference } = this.props
    const isEmpty = labels.length === 0 || values.length === 0

    return (
      <main className="container">
        {isEmpty
          ? (isFetching ? <h2 className="text-center">Loading...</h2> : <h2 className="text-center">Empty.</h2>)
          : <section style={{ opacity: isFetching ? 0.5 : 1 }} className="row">
              <section className="col-sm-12 col-md-4">
                <a className="label label-danger" onClick={this.handleRefreshClick}>Live</a>
                <h3>BTC/GBP</h3>
                <p>Page reloads every 30 seconds. Impatient? Click the live label!</p>
                <Price data={data} trend={trend} difference={difference} />
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
  const { isFetching, data, labels, values, trend, difference } = state || {
    isFetching: true,
    data: {},
    labels: [],
    values: [],
    trend: null,
    difference: null
  }

  return {
    isFetching,
    data,
    labels,
    values,
    trend,
    difference
  }
}

export default connect(mapStateToProps)(App)
