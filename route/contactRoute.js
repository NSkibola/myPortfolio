const router = require('express').Router();
const nodeMailer = require('nodemailer');


router.post('/contact', (req, res) => {
    let data = req.body;
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.json({msg: 'Please fill in all of the fields!'})
    }
        let smtpTransporter = nodeMailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth: {
                user: 'nikolaskibola@gmail.com',
                pass: process.env.REACT_APP_MY_API_KEY,
            },
        });
        let mailOptions = {
            from: data.email,
            to: 'nikolaskibola@gmail.com',
            subject: `Message from ${data.name}`,
            html:`

            <h3>Details of the Sender:<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message:</h3>
            <p>${data.message}<p/>
            `,
        };

        smtpTransporter.sendMail(mailOptions, (error) => {
            try {
                if(error) return res.status(400).json({msg: 'Please fill in all of the fields!'});
                res.status(200).json({msg: 'Thanks for contacting me!'});
            } catch (error) {
                if(error) return res.status(500).json({msg: "There is a server error!"});
            }
        });
});
module.exports = router;