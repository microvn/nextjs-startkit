const routes = require('next-routes')();

//
// Because of awesome Next.js, You don't need to add routes for all pages.
// Every file on Pages folder basically has route as they named.
// (index.js => /, about.js => /about, ...etc.)
//
// If you want to change url (for SEO or put different path), please add your route below.
// for more info, please look at https://github.com/Sly777/ran/blob/master/docs/Routing.md
//
//
// Please add your route between of comments
//
// ------------ ROUTES ---------------
routes.add('index', '/');
routes.add('auth/login', '/login');
routes.add('auth/logout', '/logout');


routes.add('contact/index', '/contact').add('contact/show', '/contact/show/:id');
routes.add('users/index', '/users').add('users/create', '/users/create').add('users/edit', '/users/edit/:id');
routes.add('areas/index', '/areas').add('areas/create', '/areas/create').add('areas/edit', '/areas/edit/:id');
routes.add('products/development', '/development').add('products/index', '/products').add('products/create', '/products/create').add('products/edit', '/products/edit/:id');
routes.add('articles/index', '/articles').add('articles/create', '/articles/create').add('articles/edit', '/articles/edit/:id');
routes.add('lifestyle/index', '/lifestyle').add('lifestyle/create', '/lifestyle/create').add('lifestyle/edit', '/lifestyle/edit/:id');
routes.add('categories/index', '/categories').add('categories/create', '/categories/create').add('categories/edit', '/categories/edit/:id');
routes.add('associates/index', '/associates').add('associates/create', '/associates/create').add('associates/edit', '/associates/edit/:id');
routes.add('configs/index', '/configs');
routes.add('configs/language', '/language');

// ------------ ROUTES ---------------
//
//

module.exports = routes;
