import { Grid, Row, Col} from 'react-bootstrap'
import React, { Component } from 'react'


class SideBar extends Component {
	render () {
		const carName = this.props.car.carName
		const priceRange = this.props.car.priceRange
		const year = this.props.car.year
		const mileage = this.props.car.mileage
		const itemNum = this.props.car.itemNumber
		const vin = this.props.car.vin

		return (
				<div>
						<Row> 
								<Col md={4}> 
										<h4> { carName } </h4>
										<h4> { year } </h4>
										<h4> { priceRange } </h4>
										<h4> { mileage } </h4>
										<h4> { itemNum } </h4>
										<h4> { vin } </h4>
								</Col> 
						</Row> 
				</div>
			)
	}
}

SideBar.propTypes = { 
	car: React.PropTypes.object.isRequired,
};



export default SideBar