import React from 'react';

export class Post extends React.Component {
	render() {
		const {detailedPost, allPosts} = this.props;
		return <div className='form-posts__detail-post'>
			<div className='form-posts__detail-post__btnBack-position'>
				<a href='#' className='form-posts__detail-post--back' onClick={() => allPosts()}>Назад</a>
			</div>
			<span className='form-posts__detail-post--title'>{detailedPost.title}</span>
			<span>{detailedPost.text}</span>
		</div>
	}
}