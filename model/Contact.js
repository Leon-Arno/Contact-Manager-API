const mongoose = require('mongoose');

const { Schema } = mongoose;

const trimmedString = options => ({
  type: String,
  trim: true,
  ...options
});

const trimmedNumber = options => ({
  type: Number,
  trim: true,
  ...options
});

const nameSchema = new Schema(
  {
    first_name: trimmedString({ required: true }),
    last_name: trimmedString()
  },
  { _id: false }
);

const addressSchema = new Schema(
  {
    home_address: trimmedString({ required: false }),
    work_address: trimmedString()
  },
  { _id: false }
);

const phoneNumberSchema = new Schema(
  {
    mobile_phone: trimmedNumber({ required: true }),
    home_phone: trimmedNumber()
  },
  { _id: false }
);

const ContactSchema = new Schema({
  name: { type: nameSchema },
  address: { type: addressSchema },
  phone_number: { type: phoneNumberSchema },
  email: { type: String, default: 'No entry' },
  website: { type: String, default: 'No entry' }
});

module.exports = mongoose.model('Contact', ContactSchema);
