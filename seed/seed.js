const faker = require('faker');
const mongoose = require('mongoose');

const Contact = require('../model/Contact');

async function seedContacts() {
  mongoose.connect(
    'mongodb://localhost:27017/contact-manager',
    {
      useNewUrlParser: true,
      useCreateIndex: true
    }
  );
  mongoose.connection.on('error', console.error);

  try {
    await Contact.deleteMany({});
    console.log('Contacts purged!');
  } catch (err) {
    console.error(err);
  }

  const contactPromises = Array(5)
    .fill(null)
    .map(() => {
      const contact = new Contact({
        name: {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName()
        },
        address: { home_address: faker.address.streetAddress() },
        phone_number: { mobile_phone: faker.phone.phoneNumber() }
      });

      return contact.save();
    });

  try {
    await Promise.all(contactPromises);
    console.log('Contacts seeded!');
  } catch (err) {
    console.error(err);
  }

  mongoose.connection.close();
}

seedContacts();
