const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc Get all Contacts
// @route GET /api/contacts
// @access Public

const getAllContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find();

  res.status(200).json(contact);
});

// @desc Get a particular  Contacts
// @route GET /api/contacts/:id
// @access Public

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  res.status(200).json(contact);
});

// @desc Create Contact
// @route POST /api/contacts
// @access Public

const createContact = asyncHandler(async (req, res) => {
  const { name, phone, email } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All field is mandatory !");
  }
  const newContact = await Contact.create({ name, email, phone });
  res.status(201).json(newContact);
});

// @desc edit a Contact
// @route PUT /api/contacts/:id
// @access Public

const editContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

// @desc delete a Contact
// @route DELETE /api/contacts/:id
// @access Public

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  const deletedContact = await Contact.findByIdAndRemove(req.params.id);
  res.status(200).json(deleteContact);
});
module.exports = {
  getAllContacts,
  getContact,
  createContact,
  editContact,
  deleteContact,
};
