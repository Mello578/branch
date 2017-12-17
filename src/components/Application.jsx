import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Header} from './Header';
import {Posts} from './Posts';
import {Post} from './Post';
import {EditPost} from './EditPost';

class ApplicationComponent extends Component {
	render() {
		return <div className='content-block'>
			<Header/>
			{
				this.props.currentPostId === undefined
					? <Posts/>
					: !this.props.editMode
						? <Post/>
						: <EditPost/>
			}
		</div>
	}
}

export const Application = connect(({currentPostId, editMode}) => ({
currentPostId, editMode
	})
)(ApplicationComponent);
