const { Redis } = require('ioredis') // import redis form ioredis

const client = new Redis(); // create a redis client

module.exports = client; // export that that to interact