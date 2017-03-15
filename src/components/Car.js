// Here, we will have all of our car components
import React, { Component } from 'react'
import CarInfoBox from './CarInfoBox'
import CarImages from './CarImages'
import MainImageSideBar from './MainImageSideBar'
import { Grid, Row, Col } from 'react-bootstrap'


// view/presentational component
class Car extends Component {
		render() {

				const car = this.props.car;
				return (
						<Grid> 
						
							<Row>
								Nav Bar
							</Row>
							<Row>
								<Col md={7} >
										<MainImageSideBar car={car} />
								</Col>
							</Row>
							<Row>
								<CarImages car={car}/>
							</Row>
								
							<Row> 
								<Col md={3} >
									<CarInfoBox car={car} header={"Performance"}/>
								</Col>
								<Col md={3} > 
									<CarInfoBox car={car} header={"Exterior"}/>
								</Col>
							</Row>


						</Grid>

					)
		}
}


export default Car