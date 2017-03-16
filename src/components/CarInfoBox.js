// import { Grid, Row, Col } from 'react-bootstrap'
import React, { Component } from 'react'


class CarInfoBox extends Component {
	render () {
		const mileage = this.props.car.mileage

		return (
			<div >
				<div > 
					<h4 className='car-info-heading'>{this.props.header}</h4>
				</div> 
				<div  > 
					<div  className='car-info-details'> 
						<h4>cylinders</h4>
					</div> 
					<div  className='car-detail'>
						{this.props.car.cylinders}
					</div>
					<div  className='car-info-details'> 
						<h4>city MPG	</h4>
					</div> 
					<div >
						{this.props.car.cityMpg}
					</div>
					<div  className='car-info-details'> 
						<h4>highway MPG	</h4>
					</div> 
					<div  >
						{this.props.car.highwayMpg}
					</div>
					<div  className='car-info-details'> 
						<h4>engine</h4>
					</div> 
					<div >
						{this.props.car.engine}
					</div>
				</div>

			</div>
			)
	}
}

CarInfoBox.propTypes = { 
	header: React.PropTypes.string.isRequired,
	car: React.PropTypes.object.isRequired,
};



export default CarInfoBox