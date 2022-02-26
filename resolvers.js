const User = require('./models/User')
const Listing = require('./models/Listing')
const Booking = require('./models/Booking')

exports.resolvers = {
    Query: {
      login: async (parent, args) => {
        return User.findOne(
          {
            username: args.username,
            password: args.password
          },
        )
      },
      getListings: async (parent, args) => {
        return Listing.find({});
      },
      getListingByName: async (parent, args) => {
        return Listing.find({ "listing_title": { "$regex": args.listing_title, "$options": "i" }})
      },
      getListingByCity: async (parent, args) => {
        return Listing.find({ "city": args.city })
      },
      getListingByPostalCode: async (parent, args) => {
        return Listing.find({ "postal_code": args.postal_code })
      },
      getBookings: async (parent, args) => {
        return Booking.find({ "username": args.username });
      },
      getListingByUser: async (parent, args) => {
        return Listing.find({ "username": args.username })
      },
    },
  
    Mutation: {
      addUser: async (parent, args) => {
        console.log(args);
        let newUser = new User({
          username: args.username,
          firstname: args.firstname,
          lastname: args.lastname,
          password: args.password,
          email: args.email,
          type: args.type
        })
        return newUser.save()
      },
      addListing: async (parent, args) => {
        console.log(args);
        let newListing = new Listing({
          listing_id: args.listing_id,
          listing_title: args.listing_title,
          description: args.description,
          street: args.street,
          city: args.city,
          postal_code: args.postal_code,
          price: args.price,
          email: args.email,
          username: args.username
        })
        return newListing.save()
      },
      addBooking: async (parent, args) => {
        console.log(args);
        let newBooking = new Booking({
          listing_id: args.listing_id,
          booking_id: args.booking_id,
          booking_date: args.booking_date,
          booking_start: args.booking_start,
          booking_end: args.booking_end,
          username: args.username
        })
        return newBooking.save()
      }
    }
  };