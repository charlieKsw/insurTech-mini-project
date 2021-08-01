require('dotenv').config();

let { REACT_APP_API_ENDPOINT } = process.env;

const api = {
	path: 'http://localhost:3000' || REACT_APP_API_ENDPOINT // Default port listen to 3000
};

export { api };
