import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Cars from './components/Cars'

// combine with Cars.js

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