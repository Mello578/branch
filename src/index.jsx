import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {Application} from './components/Application';
import { syncData } from './utils/syncData';

import './main.css';

syncData('allPosts')
	.then((dataPosts) => {

		const initialState = {
			posts: dataPosts,
			currentPostId: undefined
		};

		function postReducer(state = initialState, action) {
			switch (action.type) {
				case 'ADD_POST':
					return {
						posts: [
							...state.posts,
							action.payload
						],
						currentPostId: undefined
					};
				case 'SET_CURRENT_POST_ID':
					return {
						posts: state.posts,
						currentPostId: action.payload
					};

				default:
					return state;
			}
		}

		const store = createStore(postReducer);
		render(
			<Provider store={store}>
				<Application/>
			</Provider>,
			document.getElementById('content')
		);
	});





