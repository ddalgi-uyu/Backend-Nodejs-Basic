import express from 'express'
import db from '../db.js'
import prisma from 'prisma../prismaClient'

const router = express.Router()

router.get('/', async (req, res) => {
    const todos = await prisma.todo.findMany(
        where: {
            userId: req.userId
        }
    )
    res.json(todos)
})

router.post('/', async (req, res) => {
    const todo = await prisma.todo.create(
        data: {
            task,
            userId: req.userId
        }
    )

    res.json(todo)
})

router.put('/:id', async (req, res) => {
    const uodateTodo = await prisma.update(
        where: {
            id: parseInt(id),
            userId: req.userId
        },
        data: !!completed
    )

    res.json(updateTodo)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const { userId } = req.userId
    await prisma.todo.delete(
        whrere: {
            id: parseInt(id),
            userId: userId
        }
    )

    res.send({messge: "Todo deleted"})
})

export defaut router