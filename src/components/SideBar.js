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
				<div md={4} className='sideBar'>
						<h4 style={{color:'#343434'}} className='car-name'> { carName } </h4>
						<h4 className='header-title'> Year </h4>
						<h4 className='header-side-bar'> { year } </h4>
						<h4 className='header-title'> Price Range </h4>
						<h4 className='header-side-bar'> { newPrice } </h4>
						<h4 className='header-title'> Mileage </h4>
						<h4 className='header-side-bar'> { newMileage } miles </h4>
						<h4 className='header-title'> Item Number: { itemNum } </h4>
						<h4 className='vin-info'> VIN {vin} </h4> 
				
				
						<h4 className='side-bar-share'>	Share this car   <img src='https://image.flaticon.com/icons/png/128/20/20061.png' height='12px;' />	</h4>
				
						<table >
							<th>
										<td> Views </td>
										<td> Saves </td>
										<td> Shares </td>
								</th>
								<tr> 
									<td> 100 </td>
									<td> 34 </td>
									<td> 54 </td>
								</tr>
						
						</table>
				</div>

		
			)
	}
}

SideBar.propTypes = { 
	car: React.PropTypes.object.isRequired,
};



export default SideBar