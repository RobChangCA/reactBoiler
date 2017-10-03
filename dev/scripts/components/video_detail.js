import React from 'react';

const VideoDetail = ({video}) => {
	if (!video){
		return <div> loading...</div>
	}
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	return (
		<main className="videoContainer">
			<iframe src={url} className="selectedVideo"></iframe>
		</main>
	)
};

export default VideoDetail;