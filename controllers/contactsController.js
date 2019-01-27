const Contact = require('../model/Contact');

exports.listContacts = async (req, res) => {
  res.json(await Contact.find());
};

exports.addContact = async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json(contact);
};

exports.getContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.json(contact);
};

exports.updateContact = async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.json(contact);
};

exports.deleteContact = async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  res.json(contact);
};
