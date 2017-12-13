import React from 'react';
import {Posts} from "./posts";
import {DetailedPost} from "./detailedPost";

export class CreateAndReadPost extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: JSON.parse(localStorage.getItem('allPosts')),
			detailed: false,
			idPost: 0
		}
	}

	refreshPost(){
		this.setState({posts: JSON.parse(localStorage.getItem('allPosts'))})
	}

	showDetailedPost(id) {
		event.stopPropagation();
		this.setState({
			detailed: true,
			idPost: id
		});
	}

	allPosts() {
		event.stopPropagation();
		this.setState({
			detailed: false
		});
	}

	smalledText() {
		const post = this.state.posts;
		let smallPost = [];
		function smalled(currentPost) {
			let textCurrentPost = currentPost.text;
			if (textCurrentPost.length > 300) {
				const indexSpace = textCurrentPost.indexOf(' ', 301);
				const text = textCurrentPost.substring(0, indexSpace) + ' ...';
				currentPost.text = text;
			}
			smallPost.push(currentPost);
		}

		post.forEach((currentPost) => {
			smalled(currentPost);
		});
		return smallPost;
	};

	currentPost(id) {
		let post = JSON.parse(localStorage.getItem('allPosts'));
		return post[id];
	}

	render() {
		return (
			<div className='content-block'>
				<div className='form-create-post-header'></div>
				{
					this.state.detailed
						? <DetailedPost detailedPost={this.currentPost(this.state.idPost)}
														allPosts={() => this.allPosts()}/>
						: <Posts smallPosts={this.smalledText()}
										 showDetailedPost={(id) => this.showDetailedPost(id)}
										 refreshPost={()=> this.refreshPost()}/>
				}
			</div>
		);
	}
}