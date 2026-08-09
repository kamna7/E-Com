import express from "express";
import {
  createContact,
  getContacts,
} from "../controller/contactController.js";

import protect from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/", createContact);

// Only admin can view all queries
router.get("/", protect, admin, getContacts);

export default router;