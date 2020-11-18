import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { listingService } from '../services/ListingService'

export class ListingController extends BaseController {
  constructor() {
    super('api/listing')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      return res.send(await listingService.getAll())
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      return res.send(await listingService.getById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email
      res.send(await listingService.create(req.body))
    } catch (error) {
      next(error)
    }
  }
}
