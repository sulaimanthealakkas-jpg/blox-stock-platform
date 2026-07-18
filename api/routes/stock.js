
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {

    const stock = {
        lastUpdated: new Date(),

        fruits: [
  { name: "Rocket", inStock: false, price: 5000 },
  { name: "Spin", inStock: false, price: 7500 },
  { name: "Blade", inStock: false, price: 30000 },
  { name: "Spring", inStock: false, price: 60000 },
  { name: "Bomb", inStock: false, price: 80000 },
  { name: "Smoke", inStock: false, price: 100000 },
  { name: "Spike", inStock: false, price: 180000 },
  { name: "Flame", inStock: false, price: 250000 },
  { name: "Falcon", inStock: false, price: 300000 },
  { name: "Ice", inStock: false, price: 350000 },
  { name: "Sand", inStock: false, price: 420000 },
  { name: "Dark", inStock: false, price: 500000 },
  { name: "Diamond", inStock: false, price: 600000 },
  { name: "Light", inStock: false, price: 650000 },
  { name: "Rubber", inStock: false, price: 750000 },
  { name: "Barrier", inStock: false, price: 800000 },
  { name: "Ghost", inStock: false, price: 940000 },
  { name: "Magma", inStock: false, price: 960000 },
  { name: "Quake", inStock: false, price: 1000000 },
  { name: "Buddha", inStock: false, price: 1200000 },
  { name: "Love", inStock: false, price: 1300000 },
  { name: "Spider", inStock: false, price: 1500000 },
  { name: "Sound", inStock: false, price: 1700000 },
  { name: "Phoenix", inStock: false, price: 1800000 },
  { name: "Portal", inStock: false, price: 1900000 },
  { name: "Rumble", inStock: false, price: 2100000 },
  { name: "Pain", inStock: false, price: 2300000 },
  { name: "Blizzard", inStock: false, price: 2400000 },
  { name: "Gravity", inStock: false, price: 2500000 },
  { name: "Mammoth", inStock: false, price: 2700000 },
  { name: "T-Rex", inStock: false, price: 2700000 },
  { name: "Dough", inStock: false, price: 2800000 },
  { name: "Shadow", inStock: false, price: 2900000 },
  { name: "Venom", inStock: false, price: 3000000 },
  { name: "Control", inStock: false, price: 3200000 },
  { name: "Spirit", inStock: false, price: 3400000 },
  { name: "Dragon", inStock: false, price: 3500000 },
  { name: "Leopard", inStock: false, price: 5000000 },
  { name: "Kitsune", inStock: false, price: 8000000 },
  { name: "Yeti", inStock: false, price: 5000000 }
]
    };

    res.json(stock);

});

module.exports = router;
