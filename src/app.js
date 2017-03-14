import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Cars from './components/Cars'

class App extends Component {
		render (){
				return (
						<div> 

							<Cars />

						</div>

					)
		}
}

ReactDOM.render(<App />, document.getElementById('root'))