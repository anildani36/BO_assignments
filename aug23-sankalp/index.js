const express = require('express');
const app = express();

const redis = require('redis');

const redisClient = redis.createClient();

app.use(express.json());

redisClient.on("error", (error) => {
    console.log(error, "Error in connecting redis");
});

redisClient.get(id, (error, response) => {
    if(error) {
        console.log(error);
        throw error;
    }
    if(response != null) {
        return res.status(200).send({
            data:JSON.parse(response),
        })
    }
    else {
        next();
    }
});

app.get('/item/:id', cacheLayerMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        let apiRes = await axois.get(`https://hacker-news.firebaseio.com/v0/${id}`);
        return res.status(200).send({
            data: apiRes.data
        })
    } catch (error) {
        return res.status(500).send({
            message: `Failed ti fetch Data from API`,
        })
    }
});


app.listen(3000, (error) => {
    if(error) {
        console.log(error);
    }
    console.log("Express Server on PORT 3000");
});