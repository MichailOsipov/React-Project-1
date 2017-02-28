import React from 'react';
import ReactDOM from 'react-dom';
import './footer.scss';
import FilterLink from 'filter-link';

export default class Footer extends React.Component {
	constructor(props){
		super(props);
	}
	//добавь тип уже используемого фильтра
	render() {
		return (
			<div className="footer">
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