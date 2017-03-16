import { Grid, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';


class CarImages extends Component {
	render () {


		return (
			<div className = 'hidden-xs'>
				
				{ this.props.car.carImages.map(function(imageUrl)
					{
						const onClickImage=function() {
							return onClickImage(imageUrl)
						}
						// function that calls onclickimage
						return (
							<img
			          style={{width: 168, height: 168}}
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
	onClick: React.PropTypes.func
};

export default CarImages