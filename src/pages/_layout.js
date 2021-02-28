import React, {useState} from "react";
import Header from "../components/Header";
import classNames from "classnames";
import Head from "next/head";
import Footer from "../components/Footer";

const MainLayout = ({...props}) => {
	return (
		<div className="wrapper">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<title>NextJs Title</title>
				<meta name="description"
							content="description"/>
				<meta name="generator" content="generator"/>
				<meta name="copyright" content="© 2021 Microvn"/>
				<meta name="keywords"
							content=""/>
				<meta name="news_keywords"
							content=""/>
				<meta name="robots" content="index,follow"/>
				<meta name="author" content="OkLabel"/>
				<meta property="og:type" content="article"/>
				<meta property="fb:app_id" content=""/>
				<meta property="og:url" content=""/>
				<meta property="og:title" content=""/>
				<meta property="og:description"
							content=""/>
				<meta property="og:image"
							content=""/>
				<meta property="og:image:type" content="image/jpeg"/>
				<meta property="og:image:width" content="600"/>
				<meta property="og:image:height" content="315"/>
				<link rel="canonical" href=""/>
			</Head>
			<section className="container">
				{props.children}
			</section>
			<Footer/>
		</div>
	)
};

export default MainLayout;
