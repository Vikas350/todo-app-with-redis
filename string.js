const client = require('./client');

async function init() {
    await client.set('msg:6', "Hello from Node app.")
    // await client.expire("msg:6", 10); ->  this key will expire after 10 sec.
    const result = await client.get('msg:6');
    console.log("Result =>", result);
}

init();