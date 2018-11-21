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
       return res.status(400).json({message: err.message, code: err.code})
    })
});
    

module.exports = router;

