var nodemailer = require('nodemailer');

/*
  Here we are configuring our SMTP Server details.
  STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "getfitatheletic@gmail.com",
        pass: "getfit1234"
    },
    tls: {
        rejectUnauthorized: false
    }
});


exports.sendrequestemail = function(req,res,next){
    let userCradential = req.body;
    //const name = 'user getfit'
    mailOptions={
        to : 'farzanhanif123@gmail.com',
        subject : "GetFit Application User Contact you",
        html : `<html>
        <div style="padding: 5vw;">
            <div style="text-align: center;">
                <img src="https://res.cloudinary.com/dxk0bmtei/image/upload/v1570561504/GetFit-Logo_wbmw1o.png" alt="Smiley face"  width="100vmax">
            </div>

            <div style="padding-right: 15.5vw;padding-left: 15.5vw;padding-top: 4vw;">
                <p>
                        Hello Admin,<br><br>
                        ${userCradential.name} is interested in your premium package. Connect with them and assign them a coach/trainer<br><br>
                        <strong> User_Name contact info:</strong><br>
                        - Email Id: ${userCradential.email}<br>
                        - Phone Number: ${userCradential.number}<br><br>
                        Thanks.
                </p>
            </div>

            <div style="text-align: center;padding-right: 10.5vw;padding-left: 10.5vw;padding-top: 4vw;">
                <p>
                    <a  href="https://www.facebook.com/" target="blank"> 
                        <i class="fa fa-facebook-square" style="font-size: 3vmax; color: #3d5a99; cursor: pointer"></i> 
                    </a>

                    <a href="https://twitter.com/" target="blank"> 
                        <i class="fa fa-twitter-square"  style="font-size: 3vmax; color: #1da1f2; cursor: pointer"></i> 
                    </a>

                    <a  href="https://www.linkedin.com/" target="blank"> 
                        <i class="fa fa-linkedin-square" style="font-size: 3vmax;color: #0073b0; cursor: pointer"></i> 
                    </a>
                </p>
            </div>

        </div>   
    </body>
    </html>`
      }
      console.log(mailOptions);
      smtpTransport.sendMail(mailOptions, function(error, response){
         if(error){
              console.log(error);
        res.send("error");
       }else{
              console.log("Message sent: " + response.message);
              console.log("Message sent: " + response.message);
        res.send("sent");
           }
    });
}