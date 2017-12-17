import React from 'react';
import {connect} from 'react-redux';

function checkField(title, post) {
	if (title && post) {
		return true
	} else {
		let alertTitleField = 'Заполните поле Название',
			alertTextField = 'Заполните поле Содержание';
		!(title) ? alert(alertTitleField) :
			!(post) ? alert(alertTextField) : '';
	}
}

export class CreatePostFormComponent extends React.Component {

	addPostInLocalStorage(post) {
		localStorage.setItem('allPosts', JSON.stringify([
			...this.props.posts,
			post
		]));
	}

	addPost() {
		let textTitle = this.titleInput.value;
		let textPost = this.postInput.value;
		const idPost = this.props.posts.length;
		if (checkField(textTitle, textPost)) {
			const newPost = {
				id: idPost,
				title: textTitle,
				text: textPost
			};
			this.titleInput.value = '';
			this.postInput.value = '';
			this.props.addPost(newPost);
			this.addPostInLocalStorage(newPost);
		}
	}

	render() {
		return <div>
			<div className='form-create-post-form'>
				<span className='form-create-post-form__title'>Форма создания поста</span>
				<input className='form-create-post-form__elm-title' type='text' placeholder={'Название поста'}
							 ref={input => this.titleInput = input}/>
				<textarea className='form-create-post-form__elm-post' type='text' placeholder={'Содержание поста'}
									ref={input => this.postInput = input}/>
				<div className='form-create-post-form__btn-location'>
					<button className='form-create-post-form__btn-create' onClick={() => this.addPost()}>Создать пост</button>
				</div>
			</div>
		</div>
	}
}

export const CreatePostForm = connect(({posts}) => ({
		posts
	}),
	dispatch => ({
		addPost(post) {
			dispatch({type: 'ADD_POST', payload: post});
		}
	})
)(CreatePostFormComponent);
