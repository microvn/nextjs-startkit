import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8"/>
					<meta content="IE=edge"/>
					{/*<link href="/_next/static/style.css" rel="stylesheet" type="text/css"/>*/}
					<link href="/static/css/wrapper.css" rel="stylesheet" type="text/css"/>
					<link rel="apple-touch-icon" sizes="180x180" href="/static/img/apple-touch-icon.png"/>
					<link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon-32x32.png"/>
					<link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon-16x16.png"/>
					<link rel="manifest" href="/static/img/site.webmanifest"/>
					<link rel="mask-icon" href="/static/img/safari-pinned-tab.svg" color="#5bbad5"/>
				</Head>
				<body>
				<Main/>
				<NextScript/>
				</body>
			</Html>
		)
	}
}
