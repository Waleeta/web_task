import React, { Component } from 'react'
import Car from './Car'
import { APIManager } from '../utils'

class Cars extends Component {
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
						carImages: [
							"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_1.jpg",
							"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_6.jpeg",
							"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_5.jpg",
							"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_4.jpg",
							"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_3.jpg",
							"https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_2.jpg"
						],

				},

				list: [
				
				]
		}

	}


	componentDidMount(){
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