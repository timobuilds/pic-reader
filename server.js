const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
require('dotenv').config()

const fs = require('fs')
const multer = require('multer')
const OpenAI = require('openai')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filname: (req, file, cb) => {
        cb(null, Data.now() + "-" + file.originalname)
    }
})

const upload = multer ({storage: storage}).simple('file')

let filePath

app.post('/upload', (req,res) => {
    upload(req, res, (err) => {
        if (err){
            return res.status(500).json(err)
        }
        filePath = req.file.path
        console.log(filePath)
    })
})

app.listen(PORT, () => console.log('Listening on port ${PORT}'))



