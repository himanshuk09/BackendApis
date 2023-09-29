var nodemailer = require('nodemailer');

/*var transporter = nodemailer.createTransport({
  //service: 'gmail',
  host:"smtp.etherial.email",
  port:587,
  auth: {
    user: 'marcia.brakus38@ethereal.email',
    pass: '3TSdjphMhJRz2Wt6w3'
  }
});*/
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'cruz.marks76@ethereal.email',
      pass: '7atDJF7a3tS7arcYJN'
  }
});
var mailOptions = {
  from: 'cruz.marks76@ethereal.email',
  to: 'himanshu.khade2512@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hey himanshu I am trying to send system generate email'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
