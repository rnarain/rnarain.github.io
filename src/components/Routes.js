import { Route } from "react-router-dom";
import React, { Component } from "react";
import Index from './home/Index'
class Routes extends Component {
  constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Route path="/index" component={Index} />
				<Route exact path="/" component={Index} />
			</div>
    );
  }
}
export default Routes;
