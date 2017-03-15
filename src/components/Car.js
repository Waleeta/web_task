// Here, we will have all of our car components
import React, { Component } from 'react'
import CarInfoBox from './CarInfoBox'
import CarImages from './CarImages'
import MainImage from './MainImage'
import SideBar from './SideBar'
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
									<Col md={6} >
											<MainImage car={car} />
									</Col>
									<Col md={4} >
											<SideBar car={car} />
									</Col>
							</Row>
							<Row>
								<CarImages car={car}/>
							</Row>
								
							<Row> 
									<Col md={4}>
											<CarInfoBox car={car} header={"Performance"}/>
									</Col>
									<Col md={4} > 
											<CarInfoBox car={car} header={"Exterior"}/>
									</Col>
							</Row>


						</Grid>

					)
		}
}


export default Car