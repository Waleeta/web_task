import { Grid, Row, Col} from 'react-bootstrap'
import React, { Component } from 'react'


class SideBar extends Component {
	render () {
		const carName = this.props.car.carName
		const priceRange = this.props.car.priceRange
		const year = this.props.car.year
		const mileage = this.props.car.mileage
		const itemNum = this.props.car.itemNumber
		const vin = this.props.car.vin
		

		function numberWithCommas(x) {
    		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}

		const newMileage = numberWithCommas(mileage)
		const newPrice = numberWithCommas(priceRange)

		return (
				<div>		
						<div className='sideBar'>
								<div className='sideBar sideBar-title'>
										<h1 className='car-name black'> { carName } </h1>
								</div>						
								<div className='sideBar top'>
										<h5 className='sidebar-label medium-gray'> Year </h5>
										<h3 className='bold dark-gray'> { year } </h3>
										<h5 className='sidebar-label medium-gray'> Price Range </h5>
										<h3 className='bold dark-gray'> { newPrice } </h3>
										<h5 className='sidebar-label medium-gray'> Mileage </h5>
										<h3 className='bold dark-gray'> { newMileage } miles </h3>
								</div>
								<div className='sideBar bottom '>
										<h5 className='sidebar-label medium-gray'> Item Number: { itemNum } </h5>
										<h5 className='vin-info medium-gray'> VIN: {vin} </h5> 
										<h5 className='side-bar-share dark-gray'>	Share this car <img src='https://image.flaticon.com/icons/png/128/20/20061.png' height='12px;' />	</h5>
										<div className='social-proof'>
											<h5 className='medium-gray social-label'>Views</h5>
											<h3 className='light-green bold'>37</h3>
										</div>
										<div className='social-proof hide'>
											<h5 className='medium-gray social-label'>Saves</h5>
											<h3 className='light-green bold'>20</h3>
										</div>
										<div className='social-proof hide'>
											<h5 className='medium-gray social-label'>Shares</h5>
											<h3 className='light-green bold'>15</h3>
										</div>
								</div>
						</div>
				</div>
			)
	}
}

SideBar.propTypes = { 
	car: React.PropTypes.object.isRequired,
};



export default SideBar