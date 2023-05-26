// @desc Get all Contacts
// @route GET /api/contacts
// @access Public

const getAllContacts = (req, res) => {
  res.status(200).json({ message: "Get All conatcts " });
};

// @desc Get a particular  Contacts
// @route GET /api/contacts/:id
// @access Public

const getContact = (req, res) => {
  res
    .status(200)
    .json({ message: `Get a Particular contact with id :${req.params.id}` });
};

// @desc Create Contact
// @route POST /api/contacts
// @access Public

const createContact = (req, res) => {
  const { name, phone, email } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All field is mandatory !");
  }
  res.status(201).json({ message: "Create Contacts" });
};

// @desc edit a Contact
// @route PUT /api/contacts/:id
// @access Public

const editContact = (req, res) => {
  res
    .status(200)
    .json({ message: `Update  contact with id :${req.params.id}` });
};

// @desc delete a Contact
// @route DELETE /api/contacts/:id
// @access Public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact with id :${req.params.id}` });
};
module.exports = {
  getAllContacts,
  getContact,
  createContact,
  editContact,
  deleteContact,
};
