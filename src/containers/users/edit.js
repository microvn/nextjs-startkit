import 'isomorphic-fetch'
import React from 'react'
import Form from './form'
import mocks from './mocks'
import Loading from "../../components/Loading"

class Index extends React.Component {
	static async getInitialProps({query, req}) {
		const {id} = query;
		let userData = mocks[id - 1];
		const isBrowser = typeof window !== 'undefined';
		const isServer = !!req && !isBrowser;
		//Check if request from server
		if (isServer) {
			//something else
		} else {
			//something
		}
		return {userData};
	}

	render() {
		const {userData} = this.props;
		return !userData ? <Loading/> : <Form init={userData}/>
	}
}

export default Index;


