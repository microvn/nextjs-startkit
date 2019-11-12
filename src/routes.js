const routes = require('next-routes')();

// ------------ ROUTES ---------------
routes.add('users/index', '/').add('users/create', '/users/create').add('users/edit', '/users/edit/:id');
// ------------ ROUTES ---------------
//

module.exports = routes;
