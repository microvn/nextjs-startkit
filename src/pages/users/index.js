import React from 'react'
import Link from "next/link"
import Head from "next/head"
import {connect} from "react-redux";
import {loadUsers} from "../../containers/users/actions"
import {bindActionCreators} from "redux"
import Record from "../../containers/users/item"
import Loading from "../../components/Loading"

class Index extends React.Component {
	static getInitialProps({req, store, isServer}) {
		// Check If Server request
		if (req && req.headers && isServer) {
			const cookies = req.headers.cookie;
			if (typeof cookies === 'string') {
				store.dispatch(loadUsers());
			}
		} else {
			store.dispatch(loadUsers());
		}

	}

	render() {
		const {error, loaded, list} = this.props.users;
		return (
			loaded && !error ? (
				<div className="row">
					<Head>
						<title>This is title</title>
						<meta property="og:title" content="This is title"/>
						<meta property="og:description" content="This is Description"/>
					</Head>
					<div className="user-page">
						<Link href={`/users/create`}>
							<a className="label label-info">Create New User</a>
						</Link>
						<table className="table table-sm">
							<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Email</th>
								<th>Action</th>
							</tr>
							</thead>
							<tbody>
							{
								list && list.map((item, index) => {
									return (
										<Record key={item.id} index={index + 1} item={item}/>
									)
								})
							}
							</tbody>
						</table>
					</div>
				</div>
			) : (
				<Loading/>
			)
		)
	}
}

const mapStateToProps = state => ({
	users: state.users
});

const mapDispatchToProps = dispatch =>
	bindActionCreators({loadUsers}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Index);
