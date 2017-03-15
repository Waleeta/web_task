import { Grid, Row, Col, Image } from 'react-bootstrap'
import React, { Component } from 'react'


class MainImageSideBar extends Component {
	render () {

		return (
				<div>
						<Row> 
							<Col md={8}>
								<Image
						        
						        style={{width: 728, height: 432}}
						   			src="https://s3.us-east-2.amazonaws.com/webtaskimages/mazda-interior_1.jpg" responsive/>
						   	</Col>
								<Col md={3}> 
										cylinders	
								</Col> 
						</Row> 
				</div>
			)
	}
}

MainImageSideBar.propTypes = { 
	car: React.PropTypes.object.isRequired,
};



export default MainImageSideBar