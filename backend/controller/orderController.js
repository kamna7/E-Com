import Order from "../modals/Order.js";

import  sendEmail  from "../utils/sendEmail.js";



export const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, address, paymentId } = req.body;

    if (!items || items.length === 0 || !address || !paymentId) {
      return res.status(400).json({ message: "Invalid order data" });
    }

    const order = new Order({
      user: req.user._id,
      items,
      totalAmount,
      address,
      paymentId,
    });

    const savedOrder = await order.save();
    const message = `
Dear ${req.user.name || "Customer"},

Thank you for placing your order with us! 🛒

We’re happy to inform you that your order has been successfully placed and is now being processed.

Order Details:
- Order ID: ${savedOrder._id}
- Total Amount: ₹${savedOrder.totalAmount}
- Delivery Address: ${savedOrder.address}

You will receive another update once your order is shipped.

If you have any questions, feel free to contact us anytime.

Thank you for shopping with us! ❤️

Best regards,  
Your Company Team
`;

    // ✅ Send Email
    await sendEmail({
      email: req.user.email,
      subject: "Order Placed Successfully",
      message: message,
    });

    res.status(201).json({
      message: "Order created successfully",
      order: savedOrder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating order",
      error,
    });
  }
};

// ✅ My Order by ID
export const myOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate(
      'items.productId',
      'name price');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching order" });
  }
};

//  Get All Orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user', '_id name email');
    res.json(orders);

  } catch (error) {
    res.status(500).json({ message: "Error fetching order" });
  }
};

// ✅ Update Order Status (Admin)
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (order) {
      order.status = status;
      await order.save();

      res.json({ message: "Order status update", order });
    } else {
      res.status(400).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating order", error });
  }
};


