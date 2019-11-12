import Yup from 'yup';
import React from 'react'
import _ from "lodash-uuid"
import Router from "next/router"
import {withFormik} from 'formik';
import Service from "./service"
import Configs from "../../config"
import TextInput from "../../components/Forms/Input"
import SelectInput from "../../components/Forms/Select"
import Thumbnail from "../../components/Forms/Thumbnail"

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
				<Panel title={props.title_panel} success={!!status && !status.success}
							 error={!!errors.submit} isSubmiting={isSubmitting}>
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
				</Panel>
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
			if (_.isUuid(payload.id)) {
				await Service.editUser(payload);
			} else {
				await Service.createUser(payload);
			}
			setStatus({success: true});
			resetForm({name: ''});
			Router.push('/users');
		} catch (e) {
			notify.show(e.message || Configs.message.defaultError, 'error');
			setStatus({success: false});
			setSubmitting(false);
		}

	},
	displayName: 'EditUser',
})(UserEdit);

export default MyEnhancedForm
