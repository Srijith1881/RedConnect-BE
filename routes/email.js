const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/send-email', async (req, res) => {
    const { email, name, bloodGroup, location } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PWD,
            },tls: {
                rejectUnauthorized: false,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Thank You for Joining the Lifesaving Mission! 💉❤️",
            text: `Dear ${name},
          
          Thank you for stepping up to make a difference in the lives of others! Your willingness to donate blood is truly inspiring, and we’re grateful for your selfless act.
          
          Here are the details we’ve received:
          - Blood Group: ${bloodGroup}
          - Location: ${location}
          
          Your contribution is crucial in saving lives, and our team will reach out to you shortly to coordinate further.
          
          In the meantime, feel free to reach out if you have any questions or need assistance.
          
          Together, let’s create a healthier, happier world! 🌟
          
          Warm regards,
          The Blood Donation Team
          
          "The gift of blood is the gift of life. Donate blood, save lives."`
          };
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }
});

module.exports = router;
