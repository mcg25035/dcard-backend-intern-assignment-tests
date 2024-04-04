var axios = require('axios');

var host = 'http://localhost:3000';

async function request() {
    try {
        const response = await axios.get(host + '/ad');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
