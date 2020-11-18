import mongoose from 'mongoose'
import ListingSchema from '../models/Listing'
import ProfileSchema from '../models/Profile'

class DbContext {
  Listing= mongoose.model('Listing', ListingSchema);
  Profile = mongoose.model('Profile', ProfileSchema);
}

export const dbContext = new DbContext()
