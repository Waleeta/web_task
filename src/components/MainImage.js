import React, { Component } from 'react'


class MainImage extends Component {
	render () {
		const carName = this.props.car.carName

		return (
								<img className='main-car-image' src="https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_1.jpg" />
			)
	}
}

MainImage.propTypes = { 
	car: React.PropTypes.object.isRequired,
};



export default MainImage