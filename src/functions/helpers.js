const Configs = require('../config');

module.exports = {
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
