module.exports = {
	api_prod: process.env.API_PROD,
	api_dev: process.env.API_DEV,
	api: process.env.WEBSITE, // Host for Project
	loginPath: "/login",
	exceptionPath: ["static", "_next"],
};
