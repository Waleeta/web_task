import { Grid, Row, Col } from 'react-bootstrap'
import React, { Component } from 'react'


class CarInfoBox extends Component {
	render () {
		const mileage = this.props.car.mileage

		return (
			<div >
				<Row > 
					<h4 className='car-info-heading'>{this.props.header}</h4>
				</Row> 
				<Row  > 
					<Col md={5} className='car-info-details'> 
						<h6>cylinders</h6>
					</Col> 
					<Col md={5} >
						{this.props.car.cylinders}
					</Col>
					<Col md={5} className='car-info-details'> 
						city MPG	
					</Col> 
					<Col md={5}>
						{this.props.car.cityMpg}
					</Col>
					<Col md={5} className='car-info-details'> 
						highway MPG	
					</Col> 
					<Col md={5} >
						{this.props.car.highwayMpg}
					</Col>
					<Col md={5} className='car-info-details'> 
						engine
					</Col> 
					<Col md={5}>
						{this.props.car.engine}
					</Col>
				</Row>

			</div>
			)
	}
}

CarInfoBox.propTypes = { 
	header: React.PropTypes.string.isRequired,
	car: React.PropTypes.object.isRequired,
};



export default CarInfoBox