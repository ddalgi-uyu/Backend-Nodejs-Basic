import express from 'express'
import db from '../db.js'

const router = express.Router()

router.get('/', (req, res) => {
    const getTotos = db.prepare(`SELECT * FROM todos WHERE user_id = ?`)
    const todos = getTotos.all(req.userId)
    res.json(todos)
})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

export defaut router