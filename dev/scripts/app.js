import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink } from 'react-router-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBQelBJP8t1E-ETt05HVv4ShWZJ40GmoIc';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			videos:[],
			selectedVideo: null
		};
		this.videoSearch('hackeryou');
	}
	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos)=>{
			this.setState({
				videos:videos,
				selectedVideo: videos[0]
			});
		});
	}
	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
		// const videoSearch = (term) => this.videoSearch(term);
		return(
			<div className="wrapper"> 
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					video={this.state.videos} />
			</div> 
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
