// Here, we will have all of our car components
import React, { Component } from 'react'


// view/presentational component
class Car extends Component {
		render() {

				const carName = this.props.car.carName
				const carCityMpg = this.props.car.cityMpg + " MPG"
				const carMileage = this.props.car.mileage + " mileage"

				return (
						<div> 
							<span className='detail'>{ carName }</span><br />
							<span className='detail'>{ carCityMpg }</span><br />
							<span className='detail'>{ carMileage }</span><br />
						</div>

					)
		}
}


export default Car