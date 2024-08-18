const express = require('express');
const axios = require('axios');
const client = require('./client'); //use redis to speed up get request 

const app = express();

app.get('/', async (req, res) => {
    // login to get data from redis if it is present there
    const cacheData = await client.get('todos');
    if (cacheData) {
        return res.json(JSON.parse(cacheData));
    }

    // create get request of data is not in redis
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');

    // store the data into redis 
    await client.set('todos', JSON.stringify(data));
    await client.expire('todos', 30); //set expire time of 30sec.

    return res.json(data);
})

app.listen(9000, () => {
    console.log('server started at port 9000.')
})