import React from 'react';
import ReactDOM from 'react-dom';
import FilterLink from 'filter-link';
import './footer.scss';

export default class Footer extends React.Component {
	constructor(props){
		super(props);
	}
	
	render() {
		return (
			<div className="footer todo-list__footer">
				<FilterLink 
					filter='SHOW_ALL'
				>
					All
				</FilterLink>
				<FilterLink 
					filter='SHOW_ACTIVE'
				>
					Active
				</FilterLink>
				<FilterLink
					filter='SHOW_COMPLETED'
				>
					Completed
				</FilterLink>
			</div>
		);
	}
}