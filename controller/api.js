const redis = require("../redis");
const { succes } = require("../response");
const axios = require('axios');

async function isMe(req, res){
    const data = await redis.getCache(`GITHUB_USERNAME:aldorodrigorivera`);
    return data ? 
    succes(res, data) : 
    succes(res,(await axios.get(`https://api.github.com/users/${process.env.GITHUB}`)).data);
}

async function github(req, res){
    const { username } = req.params;
    const response = await axios.get(`https://api.github.com/users/${username}`);
    redis.setCache(`GITHUB_USERNAME:${username}`, response.data);
    return succes(res,response.data);
}

module.exports = {
    isMe,
    github
} 

