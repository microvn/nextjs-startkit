import {request} from '../../functions/request'
import Config from '../../config/index'

export default {
	createUser: (_data) => {
		let initial = {
			"name": "string",
			"email": "string@gmail.com",
		};

		return request(`${Config.api}/api/Users`, null, {
			method: "post",
			body: JSON.stringify({...initial, ..._data})
		})
	},

}
