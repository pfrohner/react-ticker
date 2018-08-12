import React from 'react'
import PropTypes from 'prop-types'

const Price = ({data, trend, difference}) => (
  <section>
    <h2 style={{ fontSize: 50 }}>£{parseFloat(parseFloat(data.last_price).toFixed(2))}</h2>
    {difference ?
      <h3>{trend === 'up'
            ? <span className="glyphicon glyphicon-circle-arrow-up text-success" aria-hidden="true"></span>
            : trend === 'down' ? <span className="glyphicon glyphicon-circle-arrow-down text-danger" aria-hidden="true"></span>
            : null
          }
        &nbsp;{difference} %
      </h3>
    : null}
  </section>
)

Price.propTypes = {
  data: PropTypes.object.isRequired,
  trend: PropTypes.string,
  difference: PropTypes.number
}

export default Price
