// Here, we will have all of our car components
import React, { Component } from 'react'
import Car from './Car'


// Container component
class Cars extends Component {
		render() {

				return (
						<div> 
							<Car />
						</div>

					)
		}
}


export default Cars