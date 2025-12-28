import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Configure Nodemailer transporter for Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "baliramjaiswarbga@gmail.com",       // Your Gmail
    pass: "oxkozgdluhzynufd"             // Gmail App Password
  }
});

// POST route to send email
app.post("/send-mail", async (req, res) => {
    console.log("REQ BODY:", req.body);
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: "baliramjaiswarbga@gmail.com", // Must be your Gmail
    replyTo: email,                       // So you can reply to user
    to: "baliramjaiswarbga@gmail.com",   // Where you want to receive the email
    subject: `Contact Form Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    res.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
