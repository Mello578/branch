import React from 'react';
import {PostPreview} from './PostPreview';
import {connect} from 'react-redux';

export class PostsPreviewsComponent extends React.Component {
	render() {
		return <div
			className='form-posts'>
			{
				this.props.posts.map((post, key) =>
					<PostPreview key={key}
											 id={post.id}
											 title={post.title}
											 text={post.text}
											 grayBackground={key % 2 === 0}/>
				)
			}
		</div>
	}
}

export const PostsPreviews = connect(({posts}) => ({
		posts
	})
)(PostsPreviewsComponent);