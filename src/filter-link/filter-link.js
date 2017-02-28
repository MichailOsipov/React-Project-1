﻿import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'link';
import { connect } from 'react-redux';

const mapStateToLinkProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	};
};

const mapDispatchToLinkProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
          dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: ownProps.filter
          });
		}
	};
};

const FilterLink = connect(
	mapStateToLinkProps,
	mapDispatchToLinkProps
)(Link);

export default FilterLink;
/*export default class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = Store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <Link
        active={
          props.filter ===
          state.visibilityFilter
        }
        onClick={
        }
      >
        {props.children}
      </Link>
    );
  }
}*/