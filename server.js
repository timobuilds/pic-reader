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

app.listen(PORT, () => console.log('Listening on port ${PORT}'))



