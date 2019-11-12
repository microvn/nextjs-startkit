import React from 'react'
import Link from "next/link"
import {connect} from "react-redux";
import {loadUsers} from "./actions"
import {bindActionCreators} from "redux"
import Record from "./item"
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
					<div className="col-md-12">
						<Link href={`/users/create`}>
							<a className="label label-info">Create</a>
						</Link>
						<table className="table table-sm">
							<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Email</th>
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
