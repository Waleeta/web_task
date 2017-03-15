import { Grid, Row, Col } from 'react-bootstrap'
import React, { Component } from 'react'


class Navar extends Component {
	render () {

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

Navbar.propTypes = { 
	car: React.PropTypes.object.isRequired,
};



export default Navbar