const { PORT } = require("./app.config");
const express = require("express");
const api = require("./routes/api");
const redis = require("./redis");

const app = express();

// --- ROUTES
app.use("/api", api);

app.listen(PORT, async () => {
        console.log(`App running 💻 in the port ${PORT}`);
        redis.connect()
        .then(console.log("Redis connected"))
        .catch("Error with redis");
});