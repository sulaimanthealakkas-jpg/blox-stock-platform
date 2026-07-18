
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {

    const stock = {
        lastUpdated: new Date(),

        fruits: [
            {
                name: "Leopard",
                inStock: false,
                price: 5000000
            },
            {
                name: "Dragon",
                inStock: false,
                price: 3500000
            },
            {
                name: "Dough",
                inStock: true,
                price: 2800000
            }
        ]
    };

    res.json(stock);

});

module.exports = router;
