import User from '../modals/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sendEmail from '../utils/sendEmail.js';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};


// register a new user
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exitingUser = await User.findOne({ email });
    if (exitingUser) {
      return res.status(400).json({ message: "User already exists..." });
    }

    // TODO : Hash password before saving the database
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // TODO : implemnet JWT token for authentication
    // TODO : OTP send for verfiy email
    // TODO : Welcome mail send for user

    const user = await User.create({ name, email, password: hashPassword });
    if (user) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();

      const message = `
    Welcome to E-Com , ${name}! Thank you for registering with us 
    Your OTP for E-Com registration is : ${otp}`;

      // send mail
      await sendEmail(
        email,
        `Welcome to E-Com Your OTP is registration`,
        message,
      );
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "Invaild userdata" });
    }

    res.status(202).json({ message: "User register successfully..." });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};


//  Userlogin
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "Invaild email and password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// get users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// get profile
// export const getProfile = async (req, res) => {
//   try {
//     res.json({
//       _id: req.user._id,
//       name: req.user.name,
//       email: req.user.email,
//       role: req.user.role,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// };

export default generateToken;
