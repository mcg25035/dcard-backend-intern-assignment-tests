// worker.mjs
import { parentPort } from 'worker_threads';
import axios from 'axios';
import User from '../test/utils/User.mjs';
import { getParamFromUser } from '../test/utils/QueryParam.mjs';

const host = 'http://localhost:3000';

async function request() {
    const user = new User();
    const param = getParamFromUser(user, 0, 10);
    const response = await axios.get(`${host}/api/v1/ad`, { params: param });
    return response.data;
}

parentPort.on('message', async (n) => {
    for (let i = 0; i < n; i++) {
        try {
            await request();
            parentPort.postMessage('success');
        } catch (error) {
            parentPort.postMessage('fail');
        }
    }
});
