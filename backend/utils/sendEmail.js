// import nodemailer from 'nodemailer';

// const sendEmail = async (to , subject , text)=>{
// try{
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth:{
//         user:process.env.EMAIL_USER,
//         pass:process.env.EMAIL_PASS
//     }
// });

// const mailOption = {
//     from: process.env.EMAIL_USER,
//     to ,
//      subject ,
//       text
// };
// await transporter.sendMail(mailOption)

// }

// catch(error){
// console.error('Error sending Email:', error)
// }

// }
// export default sendEmail

import nodemailer from "nodemailer";

const sendEmail = async ({ email, subject, message }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      text: message,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.response);

    return info;

  } catch (error) {
    console.log("Error sending Email:", error.message);

    throw error;
  }
};

export default sendEmail;