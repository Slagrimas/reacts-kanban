const express= require('express');
const router = express.Router();

const Card = require('../db/models/card');

router.route('/')
.get((req, res) => {
    return Card.fetchAll()
    .then (cards => {
        return res.json(cards);
    })
    .catch (err => {
        console.log('this is error', err)
        return res.status(400).send('an error has occured');
    });
})
.post((req, res)=>{
    const { title, body, priority, status, createdBy, AssignedTo } = req.body;
    return new Card({
        title, 
        body, 
        priority, 
        status, 
        createdBy, 
        AssignedTo
    })
    .save()
    .then(card => {
        return res.json(card);
    })
    .catch(err => {
       return res.status(400).json({ message: err.message, code: err.code })
    })
});
//The Backend Services JavaScript SDK utilizes Query objects to perform queries. A Query object is created by calling its constructor:
//get a single card by id

router.route('/:id')
.get((req, res) => {
  const id = req.params.id;
  console.log('this is the id', id)
  return Card.query({ where: { id: id } })
  .fetchAll({
      related: ['title', 'body', 'priority', 'status', 'createdBy', 'AssignedTo']
    })
    .then(card => {
            res.json(card);
    })
    .catch(err => {
      console.log('err.message', err.message);
    });
})

module.exports = router;

