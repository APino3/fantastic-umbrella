const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const {Op} = require("sequelize"); 
// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll().then( data => {
    res.json(data); 
  })
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
    Tag.findAll({ where:  
            {
              tag_id: {[Op.eq] : +req.params.id }
            }})
      .then( data => {
          res.json(data); 
    });
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then( newObject => {
    res.json(newObject); 
  }); 
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, 
    { where:  
      {
        tag_id: {[Op.eq] : +req.params.id }
      }
    }).then( newObject => {
    res.json(newObject); 
  }); 
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({ where:  
    {
      tag_id: {[Op.eq] : +req.params.id }
    }})
.then( data => {
  res.json(data); 
});
});


module.exports = router;
