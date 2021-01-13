const express = require('express')
const app = express()
const port = process.env.PORT || 3131
const html = require('./html')

app.get('/', (req, res) => res.status(200).json({ status: 'ok' }))

app.get('/html', (req, res) => {
  const url = req.query.url
  ;(async () => {
    const content = await html(url)
    res.setHeader('Content-Type', 'html/text')
    res.send(content)
  })()
})

app.listen(port, () => console.log(`app listening on port ${port}!`))
