const express = require('express')
const cors = require('cors')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()



app
  .prepare()
  .then(() => {
    const server = express()
    server.use(cors())
    server.get('/meeting/:id', (req, res) => {
      const actualPage = '/viewMeeting'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/edit/:id', (req, res) => {
        const actualPage = '/editMeeting'
        const queryParams = { id: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })
  
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
        console.log(`Our app is running on port ${ PORT }`);
    });
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })