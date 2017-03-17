// import { Grid, Row, Col } from 'react-bootstrap'
import React, { Component } from 'react'


class CarInfoBox extends Component {
	render () {
		const mileage = this.props.car.mileage

		return (
				<table className='medium-gray'> 
						<th>
								<td>
										<h3 className='car-info-heading bold'>{this.props.header}</h3>
								</td>
						</th>
						<tr>
								<td> 
										<h4>cylinders</h4>
								</td> 
								<td  className='bold'>
										{this.props.car.cylinders}
								</td>
						</tr>
						<tr>
								<td> 
										<h4>city MPG	</h4>
								</td> 
								<td className='bold'>
										{this.props.car.cityMpg} MPG
								</td>
						</tr>
						<tr>
								<td> 
										<h4>highway MPG	</h4>
								</td> 
								<td  className='bold'>
										{this.props.car.highwayMpg} MPG
								</td>
						</tr>
						<tr >
								<td> 
										<h4>engine</h4>
								</td> 
								<td className='bold'>
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