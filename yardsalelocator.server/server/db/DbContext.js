import mongoose from 'mongoose'
import ListingSchema from '../models/Listing'
import ProfileSchema from '../models/Profile'

class DbContext {
  Listing= mongoose.model('listing', ListingSchema);
  Profile = mongoose.model('profile', ProfileSchema);
}

export const dbContext = new DbContext()
