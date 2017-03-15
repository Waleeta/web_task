import { Grid, Row, Col } from 'react-bootstrap'
import React, { Component } from 'react'


class CarInfoBox extends Component {
	render () {
		const mileage = this.props.car.mileage

		return (
			<div>
			<Row> 
				{this.props.header}
			</Row> 
			<Row> 
				<Col md={6}> 
					cylinders	
				</Col> 
				<Col md={6}>
					{this.props.car.cylinders}
				</Col>
				<Col md={6}> 
					city MPG	
				</Col> 
				<Col md={6}>
					{this.props.car.cityMpg}
				</Col>
				<Col md={6}> 
					highway MPG	
				</Col> 
				<Col md={6}>
					{this.props.car.highwayMpg}
				</Col>
				<Col md={6}> 
					engine
				</Col> 
				<Col md={6}>
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