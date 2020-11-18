import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class ListingService {
  async getAll(query = {}) {
    const listing = await dbContext.Listing.find(query).populate('profile')
    return listing
  }

  async getById(id) {
    const listing = await dbContext.Listing.findById(id)
    if (!listing) {
      throw new BadRequest('Invalid Id')
    }
    return listing
  }

  async create(listing) {
    return await dbContext.Listing.create(listing)
  }
}

export const listingService = new ListingService()
