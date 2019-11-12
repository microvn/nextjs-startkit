import React from 'react'
import {Provider} from "react-redux";
import withSaga from "next-redux-saga";
import App from "next/app";
import flowRight from 'lodash.flowright'
import withRedux from "next-redux-wrapper";
import Store from "../store";

class MyApp extends App {

	static async getInitialProps({Component, ctx}) {
		return {
			pageProps: {
				...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
			}
		};
	}

	render() {
		const {Component, pageProps, store} = this.props;
		return (
			<Provider store={store}>
				<Component {...pageProps}/>
			</Provider>
		);
	}

}

export default flowRight([withRedux(Store), withSaga])(MyApp);
