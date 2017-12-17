import React from 'react';
import {connect} from 'react-redux';

export class EditPostComponent extends React.Component {

	allPosts() {
		this.props.allPosts(undefined);
	}

	editPost() {
		let posts = this.props.posts.filter((currentPost) =>
			currentPost.id !== this.props.post.id
		);
		if (this.titleInputEdit.value.length && this.postInputEdit.value.length) {
			const editedPost = {
				id: this.props.post.id,
				title: this.titleInputEdit.value,
				text: this.postInputEdit.value
			};
			posts = [...posts, editedPost];
		}
		localStorage.setItem('allPosts', JSON.stringify(posts));
		this.props.showPosts(posts);
	}

	render() {
		return <div>
			<div className='form-create-post-form'>
				<span className='form-create-post-form__title'>Форма редактирования поста</span>
				<input className='form-create-post-form__elm-title' type='text' placeholder={'Название поста'}
							 ref={input => this.titleInputEdit = input}
							 defaultValue={this.props.post.title}/>
				<textarea className='form-create-post-form__elm-post' placeholder={'Содержание поста'}
									ref={input => this.postInputEdit = input}
									defaultValue={this.props.post.text}/>
				<div className='form-create-post-form__btn-location'>
					<button className='form-create-post-form__btn-back' onClick={() => this.allPosts()}>Назад</button>
					<button className='form-create-post-form__btn-edit' onClick={() => this.editPost()}>Изменить пост</button>
				</div>
			</div>
		</div>
	}
}

export const EditPost = connect(({currentPostId, posts}) => {
		return {
			post: posts.find(({id}) => id === currentPostId), posts
		};
	},
	dispatch => ({
		allPosts(id) {
			dispatch({type: 'SET_CURRENT_POST_ID', payload: id});
		},
		showPosts(posts) {
			dispatch({type: 'SHOW_POSTS', payload: posts});
		}
	})
)(EditPostComponent);
