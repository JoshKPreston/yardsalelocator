import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import { logger } from '../utils/Logger'

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

  async create(newListing) {
    return await dbContext.Listing.create(newListing)
  }

  async edit(listingId, body) {
    try {
      return await dbContext.Listing.findOneAndUpdate({ _id: listingId }, body)
    } catch (error) {
      logger.error(error)
    }
  }

  async delete(listingId) {
    try {
      return await dbContext.Listing.findOneAndDelete({ _id: listingId })
    } catch (error) {
      logger.error(error)
    }
  }
}

export const listingService = new ListingService()
