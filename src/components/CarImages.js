import { Grid, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';


class CarImages extends Component {
	render () {
		return (
			<div className='hidden-xs'>
				<Row> 
					 	<img
			          style={{width: 100, height: 100}}
			          src="https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_1.jpg" />
	          <img
			          style={{width: 100, height: 100}}
			          src="https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_6.jpeg" />
	          <img
			          style={{width: 100, height: 100}}
			          src="https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_5.jpg" />
	          <img
			          style={{width: 100, height: 100}}
			          src="https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_4.jpg" />
	          <img
			          style={{width: 100, height: 100}}
			          src="https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_3.jpg" />
	          <img
			          style={{width: 100, height: 100}}
			          src="https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_2.jpg" />
      	</Row>
			</div>
			)
	}
}

CarImages.propTypes = {
	car: React.PropTypes.object.isRequired,
};

export default CarImages