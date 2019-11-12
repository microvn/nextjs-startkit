import {combineReducers} from 'redux';

import Users from './pages/users/reducers'
import Areas from './pages/areas/reducers'
import Products from './pages/products/reducers'
import Articles from './pages/articles/reducers'
import Associates from './pages/associates/reducers'
import LifeStyle from './pages/lifestyle/reducers'
import Categories from './pages/categories/reducers'
import Contact from './pages/contact/reducers'

export default combineReducers({
	users: Users,
	areas: Areas,
	products: Products,
	articles: Articles,
	associates: Associates,
	lifestyle: LifeStyle,
	categories: Categories,
	contact: Contact
})
