import React from 'react'
import PropTypes from 'prop-types'

const Price = ({data}) => (
  <section>
    <h2 style={{ fontSize: 50 }}>£{parseFloat(parseFloat(data.price).toFixed(2))}</h2>
    {data.difference ?
      <h3>{data.trend === 'up'
            ? <span className="glyphicon glyphicon-circle-arrow-up text-success" aria-hidden="true"></span>
            : data.trend === 'down' ? <span className="glyphicon glyphicon-circle-arrow-down text-danger" aria-hidden="true"></span>
            : null
          }
        &nbsp;{data.difference} %
      </h3>
    : null}
  </section>
)

Price.propTypes = {
  data: PropTypes.object.isRequired
}

export default Price
