import React from "react";
import {render} from "react-dom";
import '../style/style.css';
import {addPosts} from "./addPosts";
import {CreateAndReadPost} from "./CreateAndReadPost";

class AllPosts extends React.Component {

	render() {
		return (
			<div>>
				<CreateAndReadPost />
			</div>
		)
	}
}

(() => {
	addPosts('allPosts')
		.then(() => {
			render(<AllPosts />,
				document.getElementById('content'));
		});
})();
