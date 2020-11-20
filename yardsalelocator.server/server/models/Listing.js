import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Listing = new Schema(
  {
    address: { type: String, required: true },
    lat: { type: String, required: true },
    long: { type: String, required: true },
    startDate: { type: Date, required: true },
    daysOpen: { type: Number, required: true, default: 1 },
    isOpen: { type: Boolean, default: false },
    tags: { type: Array },
    // NOTE we may want to consider changing this to an img array
    img: { type: String },
    description: { type: String },
    profile: { type: String, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Listing.virtual('creator', {
  localField: 'profile',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})

export default Listing

// "formattedAddress": "8455 W Westpark St, Boise, ID 83704 USA",
// "latitude": 43.606633
// "longitude": -116.285809

//       "latitude": 40.7041,
//       "longitude": -73.9867,
//       "address": "20 Jay St, Brooklyn, New York, NY 11201 USA",
