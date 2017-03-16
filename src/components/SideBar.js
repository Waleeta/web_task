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
						<div> 
								<div md={4}> 
										<h4 style={{color:'#343434'}} className='car-name'> { carName } </h4>
										<h4 className='header-side-bar'> { year } </h4>
										<h4 className='header-side-bar'> { priceRange } </h4>
										<h4 className='header-side-bar'> { mileage } </h4>
										<h4 className='header-side-bar'> { itemNum } </h4>
										<h4 className='header-side-bar'> { vin } </h4>
								</div> 
						</div> 
				</div>
			)
	}
}

SideBar.propTypes = { 
	car: React.PropTypes.object.isRequired,
};



export default SideBar