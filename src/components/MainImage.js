import React, { Component } from 'react'

class MainImage extends Component {
		render () {
				return (
						<img className='main-car-image' src={this.props.currentImage} />
				)
		}
}

MainImage.propTypes = { 
		currentImage: React.PropTypes.string,
};


export default MainImage