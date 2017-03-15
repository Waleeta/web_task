// Here, we will have all of our car components
import React, { Component } from 'react'
import CarInfoBox from './CarInfoBox'
import CarImages from './CarImages'
import MainImage from './MainImage'
import SideBar from './SideBar'
import { Grid, Row, Col } from 'react-bootstrap'


// view/presentational component
class Car extends Component {

		// set initial state to {currentImage: props.car.carImages[0]}
		// 

		render() {

				const car = this.props.car;
				return (
						<Grid className='full-car'> 
						
							<Row className='nav-bar'>
								Nav Bar
							</Row>
							<Row>
									<Col md={7} className='main-car-image' >
											<MainImage  car={car} />
									</Col>
									<Col md={5} className='side-bar-info'>
											<SideBar car={car} />
									</Col>
							</Row>
							<Row className="car-images">
								<Col md={10}>
									<CarImages car={car}/>
								</Col>
							</Row>
								
							<Row> 
									<Col md={5} className='car-info-div'> 
											<CarInfoBox car={car} header={"EXTERIOR"}/>
									</Col>
									<Col md={5} className='car-info-div'>
											<CarInfoBox car={car} header={"PERFORMANCE"}/>
									</Col>
							</Row>


						</Grid>

					)
		}
}


export default Car