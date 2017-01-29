import React from 'react';
import ReactDOM from 'react-dom';

export default class Filter extends React.Component {
	constructor(props){
		super(props);
		this.handleFilterSet = this.handleFilterSet.bind(this);
	}
	
	handleFilterSet(e) {
		//не знаю как лучше здесь определить, какой фильтр вызвал функцию
		let filterType = e.target.href.split("#/")[1];
		this.props.setFilter(filterType);
	}
	
	render() {
		return (
			<div className="filters">
				<a href="#/All" onClick={this.handleFilterSet}>All</a>
				<a href="#/Complete" onClick={this.handleFilterSet}>Complete</a>
				<a href="#/Active" onClick={this.handleFilterSet}>Active</a>
			</div>
		);
	}
}