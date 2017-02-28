import React from 'react';
import ReactDOM from 'react-dom';

export default class Link extends React.Component {
	constructor(props){
		super(props);		
	}
	
	render() {
		return (
			//this.props.active ???
			<a href='#' onClick={e => {
				e.preventDefault();
				this.props.onClick();
			}}>
				{this.props.children}
			</a>
		);
	}
}