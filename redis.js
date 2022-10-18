const redis =  require("redis");
const { promisify } = require("util");
const { REDIS_URL } = require("./app.config");

class RedisClient {
    constructor(){
        this.client = null;
        this.GET_REDIS_ASYNC = null;
        this.SET_REDIS_ASYNC = null;
    }
    async connect(){
        this.client = redis.createClient({
            url:REDIS_URL
        });
        await this.client.connect();
        this.GET_REDIS_ASYNC =  promisify(this.client.get);
        this. SET_REDIS_ASYNC =  promisify(this.client.set);
        return this.client;
    }

    async getCache(key) {
        try{
            const data = await this.client.get(key);
            return data ? JSON.parse(data) : undefined;
    
        }catch(err){
            console.error("Error getting cache data", err);
        }
    }
    
    async setCache(key, data){
        try{
            await this.client.set(key, JSON.stringify(data));
        } catch(err) {
            console.error("Error set data in cache", err);
        }
    }
    
}

module.exports = new RedisClient();