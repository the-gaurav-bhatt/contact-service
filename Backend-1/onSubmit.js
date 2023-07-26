const User = require("./models/contactModel");
const { sendMailNormal } = require("./utils/email");
//1:) logout user by putting jwt ==null in user's browser cookie
const onSubmitControl = async (req, res, next) => {
  //extract all user Information:
  const { name, email, subject, message, contact } = req.body;

  //d) preparing credentials to send user an email:
  const options = {
    email: email,
    subject: subject,
    message: ` 
          Name : ${name} ,
          Email :${email} ,
          contact : ${contact} ,
          message : ${message},
         `,
  };
  //e) send reset password link to the user's email
  await sendMailNormal(options);
  console.log("email sent");
    await User.updateOne({ ...req.body });
  res
    .status(200)
    .json({ status: "success", message: "email sent Successfully" ,data:{
      options
    }});
};

module.exports = onSubmitControl;
