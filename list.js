const client = require('./client');

async function init() {
    await client.lpush('messages', 1);
    await client.lpush('messages', 2);
    await client.lpush('messages', 3);
    await client.lpush('messages', 4);
    const result = await client.lpop('messages');
    // const awaitResult = await client.blpop('messages', 10);
    console.log(result);
    // console.log(awaitResult)
}

init();