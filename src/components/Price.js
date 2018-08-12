import React from 'react'
import PropTypes from 'prop-types'

const Price = ({data, trend, difference}) => (
  <section className="row">
    <div className="col-sm-12">
      <h2 style={{ fontSize: 50 }}>£{data.last_price}</h2>
    </div>
    <div className="col-sm-12">
      {difference ?
        <h4>{trend === 'up'
              ? <span className="glyphicon glyphicon-circle-arrow-up text-success" aria-hidden="true"></span>
              : trend === 'down' ? <span className="glyphicon glyphicon-circle-down-up text-danger" aria-hidden="true"></span>
              : null
            }
          &nbsp;{difference}%
        </h4>
      : null}
    </div>
  </section>
)

Price.propTypes = {
  data: PropTypes.object.isRequired,
  trend: PropTypes.string,
  difference: PropTypes.number
}

export default Price
