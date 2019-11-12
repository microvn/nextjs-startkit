const Configs = require('../config');
const _ = require('lodash');
const Moment = require('moment');
const Cookie = require('js-cookie');
const jsHttpCookie = require('cookie');


module.exports = {

	unixToTime: (unix) => {
		Moment.locale('vi');
		return Moment(unix).format('Do MMMM YYYY, h:mm:ss')
	},

	formatStatus: (_language, _status, _rev = false) => {
		if (_language !== null && typeof _language === "object") {
			_language = _language.language
		} else if (_language === null && process.browser) {
			_language = localStorage.getItem('language');
		} else {
			_language = 'en'
		}

		if (_rev) return _.find(Configs.default.status[_language], _status).value;
		return _status && _status === 1 ? Configs.default.status[_language][0] : _status === 2 ? Configs.default.status[_language][1] : Configs.default.status[_language][2];
	},

	formatValue: (_data, _value, _rev = false) => {
		let result = null;
		if (_.isArray(_value)) {
			if (_.isArray(_data)) {
				result = [];
				_data.forEach((item) => {
					if (_rev) result.push(item.value);
					else result.push({value: item[_value[0]], label: item[_value[1]]})
				});
				return _rev ? result : result.length > 1 ? result : result[0];
			} else {
				if (_rev) {
					result = [];
					result.push(_data.value)
				} else result = {value: _data[_value[0]], label: _data[_value[1]]}
			}
		}
		return result;
	},

	getImage(_path, _width = null, _height = null) {
		if (_path) {
			if (this.isHasHttp(_path)) return _path;
			let __width = '';
			let __height = '';

			if (!_.isNull(_width)) {
				__width = `/w${_width}`;
			}
			if (!_.isNull(_height)) {
				__height = `/h${_height}`;
			}

			return `${Configs.image}${__width}${__height}/!${_path}`;
		}
	},

	convertValueToRecord: (_value) => {
		if (_value && !_.isUndefined(_value[0]) && !_.isUndefined(_value[1])) {
			let lstLate = _value[0].split(',');
			let lstLong = _value[1].split(',');

			return [lstLate, lstLong].reduce((arrayLate, arrayLong) => arrayLate.map((item, i) => Object.assign({}, {
					lat: parseFloat(item),
					lng: !_.isUndefined(arrayLong[i]) ? parseFloat(arrayLong[i]) : 0
				}))
			);
		} else return []
	},


	getCenterFromDegrees: (_data) => {
		if (!(_data.length > 0)) {
			return false;
		}

		const num_coords = _data.length;

		let X = 0.0;
		let Y = 0.0;
		let Z = 0.0;

		for (let i = 0; i < _data.length; i++) {
			const lat = _data[i]['lat'] * Math.PI / 180;
			const lon = _data[i]['lng'] * Math.PI / 180;

			const a = Math.cos(lat) * Math.cos(lon);
			const b = Math.cos(lat) * Math.sin(lon);
			const c = Math.sin(lat);
			X += a;
			Y += b;
			Z += c;
		}

		X /= num_coords;
		Y /= num_coords;
		Z /= num_coords;

		const lon = Math.atan2(Y, X);
		const hyp = Math.sqrt(X * X + Y * Y);
		const lat = Math.atan2(Z, hyp);

		const newX = parseFloat(lat * 180 / Math.PI);
		const newY = parseFloat(lon * 180 / Math.PI);

		return {lat: newX, lng: newY};
	},


	isHasHttp: (_path) => {
		return /^(f|ht)tps?:\/\//i.test(_path);
	},

	changeLanguage: (_req, _language, result = false) => {
		Cookie.set('language', _language);
		if (!_req && process.browser) {
			localStorage.setItem('language', _language);
			return {language: _language, isServer: false};
		} else {
			return {language: _language, isServer: true};
		}
	},

	getLanguage: (_req) => {
		if (!_req && process.browser) {
			return localStorage.getItem('language') ? localStorage.getItem('language') : undefined
		} else {
			if (typeof _req.headers.cookie == "string") {
				const cookiesJSON = jsHttpCookie.parse(_req.headers.cookie);
				return cookiesJSON.language
			} else {
				return undefined;
			}
		}
	},

	getFieldByLanguage: (_language, _field) => {
		return _language && _language === 'en' ? `${_field}En` : _field
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
