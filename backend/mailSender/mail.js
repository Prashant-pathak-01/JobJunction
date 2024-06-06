import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "prashantpathak6395@gmail.com",
    pass: "isyw xgxq miet oejb",
  },
});

const mailOptions = {
  from: "prashantpathak6395@gmail.com",
  to: "prashantpathak6297@gmail.com",
  subject: "JobJunction email confirmation",
  text: "Please confirm your email",
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
            background-color: #frvnerl;
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

        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
        }

        .button:hover {
            background-color: #0056b3;
        }

        .footer {
            text-align: center;
            margin-top: 20px;
        }

        .footer p {
            font-size: 14px;
            color: #888888;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="https://drive.google.com/file/d/1_4rqDeBTirzaeTfJc11_B1mKb0aj9N8D/view?usp=sharing" alt="JobJunction">
        </div>
        <div class="content">
            <p class="message">Dear HR,</p>
            <p class="message">Thank you for creating an account on JobJunction. Please click the button below to confirm your email address.</p>
            <a href="https://example.com/confirm-email" class="button">Confirm Email</a>
        </div>
        <div class="footer">
            <p>If you did not create an account on JobJunction, please disregard this email.</p>
        </div>
    </div>
</body>
</html>

  `,
};

(async () => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error(error);
  }
})();
