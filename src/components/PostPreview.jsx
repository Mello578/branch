import React from 'react';
import {connect} from 'react-redux';

const classnames = require('classnames');


function reduceText(text) {
	return text.length > 300
		? `${text.substring(0, text.indexOf(' ', 301))} …`
		: text;
}

export class PostPreviewComponent extends React.Component {

	showPost() {
		this.props.showPost(this.props.id);
	}

	render() {
		const {title, text, grayBackground} = this.props;

		const btnClass = classnames('form-posts__post', {
			'form-posts__post--gray': grayBackground
		});
		return <div className={btnClass}>
			<a
				href={'#'}
				className='form-posts__post--title'
				onClick={() => {
					this.props.showPost(this.props.id);
				}}>
				{title}
			</a>
			<span>{reduceText(text)}</span>
		</div>
	}
}

export const PostPreview = connect(({posts}) => ({
		posts
	}),
	dispatch => ({
		showPost(id) {
			dispatch({type: 'SET_CURRENT_POST_ID', payload: id});
		}
	})
)(PostPreviewComponent);

