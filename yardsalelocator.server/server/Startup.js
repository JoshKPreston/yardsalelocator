import bp from 'body-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import { RegisterControllers, Paths } from '../Setup'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { logger } from './utils/Logger'
const domain = process.env.AUTH_DOMAIN

export default class Startup {
  static ConfigureGlobalMiddleware(app) {
    // NOTE Configure and Register Middleware
    const whitelist = ['http://localhost:8080', 'https://yard-sale-locator.herokuapp.com']
    const corsOptions = {
      origin: function(origin, callback) {
        const originIsWhitelisted = whitelist.indexOf(origin) !== -1
        callback(null, originIsWhitelisted)
      },
      credentials: true
    }
    app.use('',
      helmet({
        contentSecurityPolicy: {
          directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", `https://${domain}/*`, 'https://maps.googleapis.com/*', 'https://api.radar.io/*', 'https://bcwclassroom.us.auth0.com/*', 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js', 'https://code.jquery.com/jquery-3.4.1.slim.min.js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js', '*'],
            styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'", '*'],
            imgSrc: ["'self'", '*.githubusercontent.com', '*.blob.core.windows.net', 'data:', '*'],
            connectSrc: ["'self'", `https://${domain}/oauth/token`, `https://${domain}/userinfo`, 'https://api.radar.io/*', 'https://bcwclassroom.us.auth0.com/*', '*'],
            fontSrc: ["'self'", 'https://fonts.gstatic.com', '*'],
            objectSrc: ["'self'"],
            mediaSrc: ["'self'"],
            frameSrc: ["'self'", `https://${domain}`]
          },
          reportOnly: false
        }
      })
    )
    app.use(cors(corsOptions))
    app.use(bp.json({ limit: '50mb' }))

    // NOTE Configures auth0 middleware that is used throughout controllers
    Auth0Provider.configure({
      domain: process.env.AUTH_DOMAIN,
      clientId: process.env.AUTH_CLIENT_ID,
      audience: process.env.AUTH_AUDIENCE
    })
  }

  static ConfigureRoutes(app) {
    const router = express.Router()
    RegisterControllers(router)
    app.use(router)

    app.use('', express.static(Paths.Public))
    Startup.registerErrorHandlers(app)
  }

  static registerErrorHandlers(app) {
    // NOTE SEND JSON 404 for any unknown routes
    app.use('/api', (_, res, next) => {
      res.status(404).send({ status: 404, message: 'Not Found' })
    })

    // NOTE SEND HTML 404 for any unknown routes
    app.use(
      '*',
      (_, res, next) => {
        res.status(404)
        next()
      },
      express.static(Paths.Public + '404')
    )
    // NOTE Default Error Handler
    app.use((error, req, res, next) => {
      if (!error.status) {
        error.status = 400
      }
      if (error.status === 500) {
        logger.error(error)
      }
      res.status(error.status).send({ error: { message: error.toString(), status: error.status }, url: req.url })
    })
  }
}
