const express = require('express');
const nodemailer = require('nodemailer')
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static('Frontend'));
app.use(express.json())

app.get('/', (req, res)=>{
   res.sendFile(__dirname + 'Frontend/Account/contact.html')
})

app.post('/', (req, res)=>{
   console.log (req.body)

   const transporter = nodemailer.createTransport ({

      service: 'gmail',
      auth: {
         user: 'fitcontact1@gmail.com',
         pass: 'yzkdiscfakraxghg'
      }
   })

   const mailOptions = {
      from: req.body.email,
      to: 'fitcontact1@gmail.com',
      subject: `Message from ${req.body.email}: ${req.body.subject}`,
      text: req.body.message
   }

   transporter.sendMail(mailOptions, (error, info)=>{
      if (error){
         console.log(error);
         res.send('error');
      } else {
         console.log('Email sent: ' + info.response);
         res.send('success');
      }
   })
})


app.listen(PORT, ()=>{
   console.log(`Server Running on port ${PORT}`);
})