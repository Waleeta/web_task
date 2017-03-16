import React, { Component } from 'react'
import CarInfoBox from './CarInfoBox'
import CarImages from './CarImages'
import MainImage from './MainImage'
import SideBar from './SideBar'
import NavBar from './NavBar'
import Footer from './Footer'


class Car extends Component {

		constructor(props) { 
				super(props);
				this.state = {
					currentImage: props.car.carImages[0]
				};
				this.onClickImage = this.onClickImage.bind(this);
		}

		onClickImage(imageUrl) { 
				this.setState({currentImage: imageUrl});
		}

		render() {

				const car = this.props.car;
				
				return (
						<div className='full-car'> 
						
								<div>
									<NavBar />
								</div>
								<div >
										<div className='main-car-image' >
												<MainImage  currentImage={this.state.currentImage} />
										</div>
										<div className='side-bar-info'>
												<SideBar car={car} />
										</div>
								</div>
								<div className="car-images">
										<div >
												<CarImages car={ car } onClickImage={ this.onClickImage }/>
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

								<div className='footer'>
											<Footer />
								</div>

						</div>

					)
		}
}


export default Car