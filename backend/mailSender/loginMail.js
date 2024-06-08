import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "prashantpathak6395@gmail.com",
    pass: "isyw xgxq miet oejb",
  },
});

const sendEmail = async (req, res) => {
  const mailOptions = {
    from: "prashantpathak6395@gmail.com",
    to: req.body.email,
    subject: "Password for JobJunction",
    text: "JobJunction",
    html: `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }

        .logo {
            text-align: center;
            margin-bottom: 20px;
        }

        .logo img {
            width: 150px;
        }

        .content {
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 10px;
        }

        .message {
            font-size: 16px;
            color: #333333;
            margin-bottom: 20px;
        }

        .footer {
            text-align: center;
            margin-top: 20px;
        }

        .footer p {
            font-size: 14px;
            color: #888888;
        }
        .password{
          text-align: center;
          
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="https://raw.githubusercontent.com/Prashant-pathak-01/JobJunction/master/frontend/src/data/Logo.png" alt="JobJunction">
        </div>
        <div class="content">
            <p class="message">Dear HR,</p>
            <p class="message">Your password is given below:</p>
            <h1 class="password">${req.body.password}</h1>
            <p class="message">Please ensure to keep your password secure and do not share it with anyone.</p>
            <p class="message">If you have any questions or need further assistance, feel free to contact us.</p>
        </div>
    </div>
</body>
</html>
`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json(info.response);
  } catch (error) {
    return res.status(500).json("Some error occured " + error.message);
  }
};

export default sendEmail;
