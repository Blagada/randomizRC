const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/meeting/:id', (req, res) => {
      const actualPage = '/meeting'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/creer-rencontre/', (req, res) => {
      const actualPage = '/createMeeting'
      app.render(req, res, actualPage)
    })

    server.get('/edit/:id', (req, res) => {
        const actualPage = '/editMeeting'
        const queryParams = { id: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })
  
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(process.env.PORT || 3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })