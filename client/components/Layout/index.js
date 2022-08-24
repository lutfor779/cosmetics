import Head from "next/head";
import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const Layout = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{title || "Keya Cosmetics"}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main>{children}</main>

			<Footer />
		</>
	);
};

export default Layout;
