import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import Notifications, {notify} from 'react-notify-toast';

export default class MyDocument extends Document {
	render() {
		return (
			<html lang="vi">
			<Head>
				<meta charSet="utf-8"/>
				<meta content="IE=edge"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<title>LuxuryCms</title>

				<link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet"
							type="text/css"/>
				<link href="/_next/static/style.css" rel="stylesheet" type="text/css"/>
				<link href="/static/css/icons/icomoon/styles.css" rel="stylesheet" type="text/css"/>
				<link href="/static/css/icons/fontawesome/styles.min.css" rel="stylesheet" type="text/css"/>
				<link href="/static/css/core/bootstrap.min.css" rel="stylesheet" type="text/css"/>
				<link href="/static/css/core/core.min.css" rel="stylesheet" type="text/css"/>
				<link href="/static/css/core/components.min.css" rel="stylesheet" type="text/css"/>
				<link href="/static/css/core/colors.min.css" rel="stylesheet" type="text/css"/>

				<link rel="apple-touch-icon" sizes="180x180" href="/static/img/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon-16x16.png"/>
				<link rel="manifest" href="/static/img/site.webmanifest"/>
				<link rel="mask-icon" href="/static/img/safari-pinned-tab.svg" color="#5bbad5"/>
				<meta name="msapplication-TileColor" content="#da532c"/>
				<meta name="theme-color" content="#ffffff"/>
				{/*<script type="text/javascript" src="/static/js/jquery.min.js"/>*/}
				{/*<script type="text/javascript" src="/static/js/bootstrap.min.js"/>*/}
				{/*<script type="text/javascript" src="/static/js/blockui.min.js"/>*/}

				{/*<script type="text/javascript" src="/static/js/core/app.js"/>*/}
				{/*<script type="text/javascript" src="/static/js/pages/login.js"/>*/}
			</Head>
			<body>
			<Notifications/>
			<Main/>
			<NextScript/>
			</body>
			</html>
		)
	}
}
