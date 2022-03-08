import * as Yup from 'yup';
import React from 'react'
import Router from "next/router"
import {withFormik} from 'formik';
import Service from "./service"
import TextInput from "../../components/Forms/Input"

const UserEdit = props => {
	const {
		values,
		touched,
		errors,
		status,
		dirty,
		handleChange,
		handleBlur,
		handleSubmit,
		handleReset,
		isSubmitting,
		setFieldValue,
		setFieldTouched,
		setErrors
	} = props;

	return (
		<div className="row">
			<div className="col-md-6 col-md-push-3">
				<form onSubmit={handleSubmit}>
					<fieldset>
						<TextInput
							id="username"
							className="form-control"
							type="text"
							disable={!!values.id}
							label={`Input Form (*):`}
							placeholder="Please input form"
							error={touched.username && errors.username}
							value={values.username}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{
							(values && typeof values.id !== 'undefined' && values.id !== "") ? (
								<input type="hidden" value={values.id}/>) : null
						}
					</fieldset>
					<div className="text-right">
						<button disabled={isSubmitting} type="submit" className="btn btn-primary">Send<i
							className="icon-arrow-right14 position-right"/></button>
					</div>
				</form>
			</div>
		</div>
	);
};


const MyEnhancedForm = withFormik({
	validationSchema: Yup.object().shape({
		username: Yup.string()
			.min(3, "UserName is longer than that")
			.required('UserName is required.'),
	}),
	mapPropsToValues: (props) => (props.init),
	handleSubmit: async (payload, {props, values, setSubmitting, setStatus, resetForm, setErrors}) => {

		try {
			if (payload.id) {
				// Something Create
			} else {
				// Something Update
			}
			setStatus({success: true});
			resetForm({name: ''});
			Router.push('/users');
		} catch (e) {
			notify.show(e.message || 'error');
			setStatus({success: false});
			setSubmitting(false);
		}

	},
	displayName: 'EditUser',
})(UserEdit);

export default MyEnhancedForm
