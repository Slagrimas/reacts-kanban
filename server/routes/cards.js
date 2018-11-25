const express = require('express');
const router = express.Router();
const Card = require('../db/models/card');

router.route('/')
    .get((req, res) => {
        return Card.fetchAll({
            withRelated: ['priority', 'status', 'created', 'assigned']
        })
            .then(cards => {
                return res.json(cards);
            })
            .catch(err => {
                console.log('this is error', err)
                return res.status(400).send('an error has occured');
            });
    })
    .post((req, res) => {
        const { title, body, priority_id, status_id, created_by, assigned_to } = req.body;
        return new Card({
            title,
            body,
            priority_id,
            status_id,
            created_by,
            assigned_to
        })
            .save()
            .then(card => {
                return card.refresh({withRelated:['title', 'body', 'priority', 'status', 'created_by', 'assigned_to']
            })
            })
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
                related: ['title', 'body', 'priority', 'status', 'created_by', 'assigned_to']
            })
            .then(card => {
                res.json(card);
            })
            .catch(err => {
                console.log('err.message', err.message);
            });
    })
    .put((req, res) => {
        let id = (req.params.id);
        const title = req.body.title;
        const body = req.body.body;
        const priority_id = req.body.priority_id;
        const status_id = req.body.status_id;
        const created_by = req.body.created_by;
        const assigned_to = req.body.assigned_to;
        return new Card({ id: id })
            .save({ title, body, priority_id, status_id, created_by, assigned_to })
            .then(response => {
                return response.refresh({
                    withRelated: ['priority', 'status', 'created', 'assigned']
                });
            })
            .then(cards => {
                res.json(cards);
            })
            .catch(err => {
                console.log('err.message', err.message);
            });
    })
    .delete((req, res) => {
        const id = req.params.id;
        return new Card({ id: id })
            .destroy()
            .then(cards => {
                return Card.fetchAll({
                    withRelated: ['priority', 'status', 'created', 'assigned']
                }).then(cards => {
                    res.json(cards);
                });
            })
            .catch(err => console.log(err));
    });

module.exports = router;

