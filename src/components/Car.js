// Here, we will have all of our car components
import React, { Component } from 'react'
import CarInfoBox from './CarInfoBox'
import CarImages from './CarImages'
import MainImage from './MainImage'
import SideBar from './SideBar'
// import { Grid, Row, Col } from 'react-bootstrap'


// view/presentational component
class Car extends Component {

		// set initial state to {currentImage: props.car.carImages[0]}
		// 

		render() {

				const car = this.props.car;
				return (
						<div> 
						
							<div className='nav-bar'>
								Nav Bar
							</div>
							<div>
									<div className='main-car-image' >
											<MainImage  car={car} />
									</div>
									<div className='side-bar-info'>
											<SideBar car={car} />
									</div>
							</div>
							<div className="car-images">
								<div >
									<CarImages car={car}/>
								</div>
							</div>
								
							<div className= 'clearfix'> 
									<div className='car-info-div'> 
											<CarInfoBox car={car} header={"EXTERIOR"}/>
									</div>
									<div className='car-info-div'>
											<CarInfoBox car={car} header={"PERFORMANCE"}/>
									</div>
							</div>


						</div>

					)
		}
}


export default Car