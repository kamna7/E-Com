import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    stock: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      default: 4,
    },

    numReviews: {
      type: Number,
      default: 23,
    },
  },
  {
    timestamps: true, // createdAt & updatedAt automatically add ho jayenge
  },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
