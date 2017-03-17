import React, { Component } from 'react';


class CarImages extends Component {
	render () {

		return (
				<div className = 'hidden-xs'>

						{ this.props.car.carImages.map((imageUrl) => {
							
								const clickImage=() => {
										return this.props.onClickImage(imageUrl)
								}
			
							return (
									<img onClick={ clickImage }
				          		
				          		className='image-gallery'
				          		src={ imageUrl } />
				      	)
			          		
							})
						} 
			
				</div>
			)
	}
}

CarImages.propTypes = {
	car: React.PropTypes.object.isRequired,
	onClickImage: React.PropTypes.func
};

export default CarImages
