import React from 'react'
import UserForm from './form'

class Index extends React.Component {

	render() {
		const {Language, Auth} = this.props;

		return <UserForm
			title_panel="Create"
			Language={Language}
			Auth={Auth}
			init={{
				username: 'abc',
			}}/>
	}
}

export default Index
