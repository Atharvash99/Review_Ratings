var nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
     service: "gmail",
     auth: {
          user : "atharvaswd69@gmail.com",
          pass : "xtnoqcwmnvlvfmuk"
     }
}) ;

var mailOptions={
    from : "atharvaswd69@gmail.com",
    to : "s.atharva30901@gmail.com",
    subject : "hyy this is the test mail",
    text : "hii this is the body part"
}

module.exports={
    transporter,
    mailOptions
}