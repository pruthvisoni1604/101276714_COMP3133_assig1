const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  listing_id: {
    type: String,
    ref: 'Listing',
    required: true
  },
  booking_id: {
    type: String,
    required: true
  },
  booking_date: {
    type: Date,
    default: Date.now,
  },
  booking_start: {
    type: Date,
    required: true
  },
  booking_end: {
    type: Date,
    required: true
  },
  username: {
    type: String,
    ref: 'User',
    required: true
  }
})

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;