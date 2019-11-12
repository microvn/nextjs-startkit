import {filterGet, request} from '../../functions/request'
import Config from '../../config/index'

export default {
	createUser: (_data) => {
		let intinital = {
			"name": "string",
			"email": "string@gmail.com",
		};

		return request(`${Config.api}/api/Users`, null, {
			method: "post",
			body: JSON.stringify({...intinital, ..._data})
		})
	},

}
