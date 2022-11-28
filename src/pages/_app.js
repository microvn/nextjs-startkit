import React from 'react'
import {Provider} from "react-redux";
import withSaga from "next-redux-saga";
import App from "next/app";
import flowRight from 'lodash.flowright'
import withRedux from "next-redux-wrapper";
import Store from "../store";
import MainLayout from './_layout';
import './_style.scss';
import {SessionProvider} from "next-auth/react"

class MyApp extends App {

	static async getInitialProps({Component, ctx}) {
		return {
			pageProps: {
				...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
			}
		};
	}

	render() {
		const {Component, pageProps, session, Language, Csrf, store} = this.props;
		const Layout = Component.Layout || MainLayout;

		return (
			<SessionProvider session={session}>
				<Provider store={store}>
					<Layout Language={Language}>
						<Component {...pageProps} Csrf={Csrf} Language={Language}/>
					</Layout>
				</Provider>
			</SessionProvider>
		);
	}

}

export default flowRight([withRedux(Store), withSaga])(MyApp);
