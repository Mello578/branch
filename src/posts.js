import React from 'react';

export class Posts extends React.Component {

	postInStorage(post){
		localStorage.setItem('allPosts', JSON.stringify(post));
	}

	checkField(title, post){
		if (title && post){
			if(title.value.length && post.value.length){
				return true
			}else{
				let alertTitleField = 'Заполните поле Название',
						alertTextField = 'Заполните поле Содержание';
				!(title.value.length) ? alert(alertTitleField) :
					!(post.value.length) ? alert(alertTextField) : '';
			}
		}
		return false
	}

	addPost() {
		const textTitle = document.getElementById('title');
		const textPost = document.getElementById('post');
		let allPost = JSON.parse(localStorage.getItem('allPosts'));
		const idPost = allPost.length;

		if (this.checkField(textTitle, textPost)){
			let newPost = {
				id: idPost,
				title: textTitle.value,
				text: textPost.value
			};
			allPost.push(newPost);
			this.postInStorage(allPost);
			textPost.value = '';
			textTitle.value = '';
			this.props.refreshPost();
		}
	}

	render() {
		const {smallPosts, showDetailedPost} = this.props;
		return (
			<div>
				<div>
					<div className='form-create-post-form'>
						<span className='form-create-post-form__title'>Форма создания поста</span>
						<input className='form-create-post-form__elm-title' type="text" placeholder={'Название поста'} id={'title'}/>
						<textarea className='form-create-post-form__elm-post' type="text" placeholder={'Содержание поста'} id={'post'}/>
						<div className='form-create-post-form__btn-location'>
							<button className='form-create-post-form__btn-create' onClick={() => this.addPost()}>Создать пост</button>
						</div>
					</div>
				</div>
				<div className='form-posts'>
					{
						smallPosts.map((post) =>
							<div key={post.id}
									 className={post.id % 2 === 0 ? 'form-posts__post' : 'form-posts__post form-posts__post--gray'}>
								<a href={"#"} className='form-posts__post--title' onClick={()=>showDetailedPost(post.id)}>{post.title}</a>
								<span>{post.text}</span>
							</div>
						)
					}
				</div>
			</div>
		);
	}
}