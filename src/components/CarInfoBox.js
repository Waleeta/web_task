// import { Grid, Row, Col } from 'react-bootstrap'
import React, { Component } from 'react'


class CarInfoBox extends Component {
	render () {
		const mileage = this.props.car.mileage

		return (
				<table  className="car-info-table"> 
					<th>
						<td colspan='2'>
							<h4 className='car-info-heading'>{this.props.header}</h4>
						</td>
					</th>
					<tr>
						<td  className='car-info-details'> 
							<h4 className='first-heading'>cylinders</h4>
						</td> 
						<td  className='car-info-details'>
							{this.props.car.cylinders}
						</td>
					</tr>
					<tr>
						<td  className='car-info-details'> 
							<h4>city MPG	</h4>
						</td> 
						<td className='car-info-details bold'>
							{this.props.car.cityMpg}
						</td>
					</tr>
					<tr>
						<td  className='car-info-details'> 
							<h4>highway MPG	</h4>
						</td> 
						<td  className='car-info-details'>
							{this.props.car.highwayMpg}
						</td>
					</tr>
					<tr>
						<td  className='car-info-details-engine'> 
							<h4>engine</h4>
						</td> 
						<td className='car-info-details-engine'>
							{this.props.car.engine}
						</td>
					</tr>
				</table>

			)
	}
}

CarInfoBox.propTypes = { 
	header: React.PropTypes.string.isRequired,
	car: React.PropTypes.object.isRequired,
};



export default CarInfoBox