const express = require('express')
const qs = require("qs")
const url = require('url')
const path = require('path')
const Fabelio = require("./fabelio");

const app = express()

if (process.env.NODE_ENV !== 'development') {
    app.use(express.static(path.join(__dirname, '../build')))
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000") // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

const validateURL = (page_url) => {
    let query_string = url.parse(page_url, true).search
    let parse_qs = qs.parse(query_string, { ignoreQueryPrefix: true, allowDots: true })
    return parse_qs.page
}

app.use('/fabelio', async (req, res) => {
    let page_url = validateURL(req.url)
    let fabelio = new Fabelio(page_url, 1)
    let result = await fabelio.getData()

    if (!result.success) {
        res.status(500).json(result)
    }
    res.status(200).json(result)
})

if (process.env.NODE_ENV !== 'development') {
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname+'../build/index.html'))
    })
}

const port = process.env.PORT || 5000
app.listen(port)
console.log(`Server listening on ${port}`)
