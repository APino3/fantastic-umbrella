const router = require('express').Router();
const { Category, Product } = require('../../models');
const {Op} = require("sequelize"); 
// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll().then( data => {
    res.json(data); 
  })
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findAll({ where:  
    {
      category_id: {[Op.eq] : +req.params.id }
    }})
.then( data => {
  res.json(data); 
});
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then( newObject => {
      res.json(newObject); 
  }); 
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, 
    { where:  
      {
        category_id: {[Op.eq] : +req.params.id }
      }
    }).then( newObject => {
    res.json(newObject); 
  }); 
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({ where:  
    {
      category_id: {[Op.eq] : +req.params.id }
    }})
.then( data => {
  res.json(data); 
  });
});

module.exports = router;
