// testStress.mjs
import { Worker } from 'worker_threads';

let success = 0;
let fail = 0;
let sended = 0;
let time = 0;

function spawnWorkers(workerCount, requestsPerWorker) {
    for (let i = 0; i < workerCount; i++) {
        const worker = new Worker(new URL('./worker.mjs', import.meta.url)); // Correct way to reference the worker in ES Modules
        sended += requestsPerWorker;

        worker.postMessage(requestsPerWorker);

        worker.on('message', (msg) => {
            if (msg === 'success') {
                success++;
            } else if (msg === 'fail') {
                fail++;
            }
        });

        worker.on('error', (err) => {
            console.error(err);
            fail += requestsPerWorker; // Assume all requests failed in case of worker error
            sended += requestsPerWorker;
            updateResult();
        });

        worker.on('exit', (code) => {
            if (code !== 0) {
                console.error(`Worker stopped with exit code ${code}`);
            }
        });
    }
}

function updateResult() {
    console.clear();
    console.log(`-------------------------`);
    console.log(`\n`);
    console.log(`     API Stress Test     `)
    console.log(`\n`);
    console.log(`-------------------------`);
    console.log(`Time: ${time}s`);
    console.log(`Success: ${success}`);
    console.log(`Success per second: ${(success / time).toFixed(0.5)} req/s`);
    console.log(`Fail: ${fail}`);
    console.log(`Sended: ${sended}`);
}

const workerCount = 2; 
const requestsPerWorker = 3000; 

setInterval(() => {
    updateResult();
    spawnWorkers(workerCount, requestsPerWorker);
    time++;
}, 1000);
