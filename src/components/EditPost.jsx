import React from 'react';
import {connect} from 'react-redux';

export class EditPostComponent extends React.Component {

	allPosts() {
		this.props.allPosts(undefined);
	}

	editPost() {
		const noEditPost = this.props.posts.filter((currentPost) => {
			return currentPost.id !== this.props.post.id
		});
		const editedPost = {
			id: this.props.post.id,
			title: this.titleInputEdit.value,
			text: this.postInputEdit.value
		};
		const allPost = [...noEditPost, editedPost];
		localStorage.setItem('allPosts', JSON.stringify(allPost));
		this.props.showPosts(allPost);
	}

	render() {
		return <div>
			<div className='form-create-post-form'>
				<span className='form-create-post-form__title'>Форма редактирования поста</span>
				<input className='form-create-post-form__elm-title' type='text' placeholder={'Название поста'}
							 ref={input => this.titleInputEdit = input}
							 defaultValue={this.props.post.title}/>
				<textarea className='form-create-post-form__elm-post' type='text' placeholder={'Содержание поста'}
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
