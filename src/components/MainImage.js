import React, { Component } from 'react'


class MainImage extends Component {
	render () {
		// const carName = this.props.car.carName

		return (
				<img className='main-car-image' src={this.props.currentImage} />
			)
	}
}

MainImage.propTypes = { 
	currentImage: React.PropTypes.string,
};



export default MainImage