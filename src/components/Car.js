// Here, we will have all of our car components
import React, { Component } from 'react'
import CarInfoBox from './CarInfoBox'
import { Grid, Row, Col } from 'react-bootstrap'


// view/presentational component
class Car extends Component {
		render() {

				const car = this.props.car;

				const carName = car.carName
				const carCityMpg = car.cityMpg + " MPG"
				const carMileage = CarInfoBox.mileage + " mileage"
				const carVin = car.vin

				return (
						<Grid> 
							<Row>
								Nav Bar
							</Row>
							<Row>
								Main image/sidebar
							</Row>
							<Row>
								images
							</Row>
						
							<Row> 
								<Col md={3}>
									<CarInfoBox car={car} header={"Performance"}/>
								</Col>
								<Col md={3}> 
									<CarInfoBox car={car} header={"Exterior"}/>
								</Col>
							</Row>


						</Grid>

					)
		}
}


export default Car