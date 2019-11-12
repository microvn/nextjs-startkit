import React from 'react'
import Link from "next/link"

class Index extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isDeleted: false,
			isStatus: Number(this.props.item.status)
		}
	}

	_delete = () => async (e) => {
		try {
			e.preventDefault();
			if (confirm('Do you want delete ?')) {
				this.setState({isDeleted: true})
			}
		} catch (e) {
			alert('Delete Error')
		}
	};

	render() {
		const {index, item, Language} = this.props;
		return (
			!this.state.isDeleted ? (
				<tr>
					<td>{index}</td>
					<td>{item.username}</td>
					<td>{item.email}</td>
					<td>
						<div className="btn-group">
							<Link prefetch href={`/users/edit?id=${item.id}`} as={`/users/edit/${item.id}`}>
								<a className="label label-info">Edit</a>
							</Link>
							<a onClick={this._delete(item.id)}
								 className="label label-danger">Delete</a>
						</div>
					</td>
				</tr>) : null
		)
	}
}


export default Index;
