const Configs = require('../config');
const Moment = require('moment');

module.exports = {

	unixToTime: (unix) => {
		Moment.locale('vi');
		return Moment(unix).format('Do MMMM YYYY, h:mm:ss')
	},

	isJson: (_string) => {
		try {
			JSON.parse(_string);
		} catch (e) {
			return false;
		}
		return true;
	},

	isExceptionUrl: (_url) => {
		try {
			let result = false;
			Configs.exceptionPath.forEach((key, item) => {
				const regex = new RegExp(key, "g");
				if (!result) result = !!_url.match(regex)
			});
			return result;
		} catch (e) {
			return false;
		}
	}
};
