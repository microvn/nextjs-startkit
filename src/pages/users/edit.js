import 'isomorphic-fetch'
import React from 'react'
import Form from './form'
import Loading from "../../components/Loading"

class Index extends React.Component {
	static async getInitialProps({query, req}) {
		const {id} = query;
		let userData = {
			username: 'HoangNguyen'
		};
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
		return userData ? <Loading/> :
			<Form title_panel="Edit" init={userData}/>
	}
}

export default Index;


