import React from 'react'
import UserForm from './form'

class Index extends React.Component {

	render() {
		return <UserForm init={{
			username: 'test',
		}}/>
	}
}

export default Index
