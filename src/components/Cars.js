// Here, we will have all of our car components
import React, { Component } from 'react'
import Car from './Car'
import { APIManager } from '../utils'

// Container component
class Cars extends Component {
		// super ensures you inherit from the previous instructor (superclass).
		constructor() {
		super()
		this.state = {
			car: {
				carName: '',
				year: '',
				priceRange: '',
				mileage: '',
				itemNumber: '',
				vin: '',
				cylinders: '',
				cityMpg: '',
				highwayMpg: '',
				engine: '',
				carImages: [],

			},

				list: [
				
				]
		}

	}


	componentDidMount(){
			console.log("Component did mount: ")
			APIManager.get('/api/car', null, (err, response) => {
					if(err) {
					alert("ERROR: " + err.message)
					return
				}
	 				
		 				this.setState({
				
							list: response.results
						})
				})
			}

		
		render() {
			const listCars = this.state.list.map((car, i) => {
						return (
								<span key={i}><Car car={car} /></span>
							) 
				})

				return (
						<div> 
							{ listCars }
						</div>

					)
		}
}


export default Cars