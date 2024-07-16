const express = require('express');
const Dish = require('../models/dish');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const dish = await Dish.findOneAndUpdate(
      { dishId: req.params.id },
      { isPublished: req.body.isPublished },
      { new: true }
    );
    res.json(dish);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
