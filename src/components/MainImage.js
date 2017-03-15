import { Grid, Row, Col, Image } from 'react-bootstrap'
import React, { Component } from 'react'


class MainImage extends Component {
	render () {
		const carName = this.props.car.carName

		return (
				<div>
						<Row> 
							<Col>
								<Image
						        
						        style={{width: 728, height: 432}}
						   			src="https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_1.jpg" responsive/>
						   	</Col>
						</Row> 
				</div>
			)
	}
}

MainImage.propTypes = { 
	car: React.PropTypes.object.isRequired,
};



export default MainImage