import React, {Component} from 'react';


class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = { term: ''};

	}
	render() {
		return(
			<div className="topBar">
				<h1>YouTube Autosearch</h1> 
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
					className="searchBar"
					placeholder="Search" 
				/>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
	 
} 
export default SearchBar;
 