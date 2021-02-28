import React from 'react'
import {Provider} from "react-redux";
import withSaga from "next-redux-saga";
import App from "next/app";
import flowRight from 'lodash.flowright'
import withRedux from "next-redux-wrapper";
import Store from "../store";
import MainLayout from './_layout';
import Configs from '../config';
import Router from "next/router"
import './_style.scss';

class MyApp extends App {

	static async getInitialProps({Component, ctx}) {
		return {
			pageProps: {
				...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
			}
		};
	}

	render() {
		const {Component, pageProps, Language, Csrf, store} = this.props;
		const Layout = Component.Layout || MainLayout;

		return (
			<Provider store={store}>
				<Layout Language={Language}>
					<Component {...pageProps} Csrf={Csrf} Language={Language}/>
				</Layout>
			</Provider>

		);
	}

}

export default flowRight([withRedux(Store), withSaga])(MyApp);
