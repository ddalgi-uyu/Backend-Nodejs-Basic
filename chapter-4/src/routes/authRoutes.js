import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router()

router.post('/register', async (req, res) => {
    const { username, password} = req.body

    const hashedPassword = bycrypt.hashSync(password, 8)

    try {
        const user = await prisma.user.create({
            data: {
                username,
                passowrd: hashedPassword
            }
        })

        const defaultTodo = `Hello :) Add you first todo!`
        await prisma.data.create(
            data: {
                task: defaultTodo,
                userId: user.id
            }
        )

        // Create a token
        const token = jwt.sign({id: user.id}, 
            process.env, JWT_SECRET, 
            {expiresIn: '24h'})

        res.json({toekn})
    }
    catch (error) {
        console.log(error)
        res.sendStatus(503)
    }
})

router.post('/login', async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await prisma.user.findUnique(
            where: {
                username: username
            }
        )

        if (!user) {
            return res.sendStatus(404).send({messgae: "User not found."})
        }

    } catch (error) {
        console.log(error)
        res.sendStatus(503)
    }
})

export default router