import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	const imgUrl = video.snippet.thumbnails.default.url;
	const videoTitle = video.snippet.title;
	const videoDescription = video.snippet.description;
		return (
			<li onClick={() => onVideoSelect(video)} className="listContainer">
					<img className="list__thumbnail" src={imgUrl} alt={videoDescription}/> 
					<div className="list__textContainer">
						<h2 className="list__title">{videoTitle}</h2>
						<h3 className="list__description">{videoDescription}</h3>
					</div>
			</li>
		)
};

export default VideoListItem; 