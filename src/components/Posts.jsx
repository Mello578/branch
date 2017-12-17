import React from 'react';
import {CreatePostForm} from './CreatePostForm';
import {PostsPreviews} from './PostsPreviews';

export class Posts extends React.Component {
	render() {
		return <div>
			<CreatePostForm/>
			<PostsPreviews/>
		</div>
	}
}

