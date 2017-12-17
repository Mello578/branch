import React from 'react';
import {connect} from 'react-redux';

export class PostComponent extends React.Component {

	allPosts() {
		this.props.allPosts(undefined);
	}

	editPost() {
		const a = {
			id: this.props.post.id,
			editMode: true
		};
		this.props.editPost(a);
	}


	render() {
		return <div className='form-posts__detail-post'>
			<div className='form-posts__detail-post__btnBack-position'>
				<a href='#' className='form-posts__detail-post--back' onClick={() => this.allPosts()}>Назад</a>
				<a href='#' className='form-posts__detail-post--edit' onClick={() => this.editPost()}>Редактировать</a>
			</div>
			<span className='form-posts__detail-post--title'>{this.props.post.title}</span>
			<span>{this.props.post.text}</span>
		</div>
	}
}


export const Post = connect(({currentPostId, posts}) => {
		return {
			post: posts.find(({id}) => id === currentPostId)
		};
	},
	dispatch => ({
		allPosts(id) {
			dispatch({type: 'SET_CURRENT_POST_ID', payload: id});
		},
		editPost(objectIdAndEditMode) {
			dispatch({type: 'EDIT_POST', payload: objectIdAndEditMode});
		}
	})
)(PostComponent);
