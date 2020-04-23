import 'isomorphic-fetch'
import React from 'react'
import Head from "next/head";
import Form from './../../containers/users/form'
import mocks from './../../containers/users/mocks'
import Loading from "../../components/Loading"

class Index extends React.Component {
	static async getInitialProps({query, req}) {
		const {id} = query;
		let userData = null;
		const isBrowser = typeof window !== 'undefined';
		const isServer = !!req && !isBrowser;
		//Check if request from ssr or csr
		if (isServer) {
			//something maybe request api, call store demo in index.js
			userData = mocks[id - 1];
		} else {
			//something else, maybe request api, call store  demo in index.js
			userData = mocks[id - 1];
		}
		return {userData};
	}

	render() {
		const {userData} = this.props;
		return (
			<div className="user-page">
				<Head>
					<title>This is user: {userData.username}</title>
					<meta property="og:title" content="This is title"/>
					<meta property="og:description" content="This is Description"/>
				</Head>
				{!userData ? <Loading/> : <Form init={userData}/>}
			</div>
		)
	}
}

export default Index;


