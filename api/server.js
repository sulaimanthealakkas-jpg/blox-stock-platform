require("dotenv").config();

const stockCollector = require("./services/stockCollector");
const express = require("express");
const cors = require("cors");

const stockRoute = require("./routes/stock");
const historyRoute = require("./routes/history");
const statusRoute = require("./routes/status");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        name: "Blox Stock API",
        version: "1.0.0",
        status: "online"
    });
});

app.use("/api/stock", stockRoute);
app.use("/api/history", historyRoute);
app.use("/api/status", statusRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
