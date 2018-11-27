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
                return card.refresh({ withRelated: ['priority', 'status', 'created', 'assigned'] })
            })
            .then(card => {
                return res.json(card);
            })
            .catch(err => {
                return res.status(400).json({ message: err.message, code: err.code })
            })
    });

router.route('/:id')
    .get((req, res) => {
        const id = req.params.id;
        return Card.query({ where: { id: id } })
            .fetchAll({
                withRelated: ['title', 'body', 'priority', 'status', 'created_by', 'assigned_to']
            })
            .then(card => {
                res.json(card);
            })
            .catch(err => {
                console.log('err.message', err.message);
            });
    })
    .put((req, res) => {

        const { id, title, body, priority_id, status_id, created_by, assigned_to } = req.body;
        console.log('req body', req.body)
        const parsedId = (id);
        const parsedStatus = (status_id);
        const parsedPriority = (priority_id);
        const parsedCreated = (created_by);
        const parsedAssigned = (assigned_to);

        return new Card()
            .where({ id: parsedId })
            .fetch({ require: true })
            .then(card => {
                card.save({
                    title: title,
                    body: body,
                    priority_id: parsedPriority,
                    status_id: parsedStatus,
                    created_by: parsedCreated,
                    assigned_to: parsedAssigned
                })
                    .then(card => {
                        return card.refresh({ withRelated: ['priority', 'status', 'created', 'assigned'] })
                    })
                    .then(card => {
                        return res.json(card);
                    })
                    .catch(err => console.log(err));
            })
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
            .catch(err => console.log('route error', err));
    });

module.exports = router;