import Contact from "../modals/Contact.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.json(contacts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};