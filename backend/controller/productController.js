import Product from "../modals/Product.js";
import cloudinary from "../config/cloudinary.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log("PRODUCT:", product);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({
        message: " hello product not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;
    let imageUrl = "";

    // if (req.file) {
    //   try {
    //    const result = await cloudinary.uploader.upload(req.file.path);
    //     // console.log("CLOUDINARY RESULT:", result);

    //     imageUrl = result.secure_url;
    //   } catch (error) {
    //     console.log("❌ CLOUDINARY ERROR:", error); // 🔥 ADD THIS
    //     return res.status(400).json({ message: "Image upload failed" });
    //   }
    // }

    if (req.file) {
  try {
    console.log("Cloudinary Config:", cloudinary.config());

    const result = await cloudinary.uploader.upload(req.file.path);

    console.log("Upload Result:", result);

    product.imageUrl = result.secure_url;
  } catch (err) {
    console.log("UPLOAD ERROR:", err);
    return res.status(500).json({
      message: err.message,
    });
  }
}

    const product = await Product.create({
      name,
      description,
      price,
      category,
      stock,
      imageUrl,
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error); // 🔥 important for debugging
    res.status(500).json({ message: "Server error createProduct" });
  }
};



export const updateProduct = async (req, res) => {
  console.log("hello1");

  try {
    console.log("hello2");

    const { name, description, price, category, stock } = req.body;

    console.log("Product ID:", req.params.id);

    const product = await Product.findById(req.params.id);

    console.log("Product:", product);

    if (product) {

      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.category = category || product.category;
      product.stock = stock || product.stock;

      console.log("hello3");

      if (req.file) {

        console.log("FILE:", req.file);

        const result = await cloudinary.uploader.upload(
          req.file.path
        );

        console.log("hello5");
        console.log(result);

        product.imageUrl = result.secure_url;
      }

      console.log("hello4");

      const updatedProduct = await product.save();

      res.json(updatedProduct);

    } else {
      res.status(404).json({
        message: "Product not found"
      });
    }

  } catch (error) {

    console.log("ERROR:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

// detete product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.deleteOne();
      res.json({ message: "Product delete" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
