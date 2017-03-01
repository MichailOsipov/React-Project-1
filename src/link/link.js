import React from 'react';
import ReactDOM from 'react-dom';
import './link.scss';

export default class Link extends React.Component {
	constructor(props){
		super(props);		
	}
	
	render() {
		return (
			//this.props.active ???
			<a 
				href='#' 
				className={["link", "footer__link", this.props.active ? "link_active" : ""].join(' ')}
				onClick={e => {
					e.preventDefault();
					this.props.onClick();
				}}>
				{this.props.children}
			</a>
		);
	}
}