var API_KEY = 'Your_Api_key';
var DOMAIN = 'Your_Domain';
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

sendMail = function(sender_email, reciever_email, email_subject, email_body){

  const data = {
    "from": sender_email,
    "to": reciever_email,
    "subject": email_subject,
    "text": email_body
  };
  
  mailgun.messages().send(data, (error, body) => {
    if(error) console.log(error)
    else console.log(body);
  });
}

var sender_email = 'gourav@gmail.com'
var receiver_email = 'test@gmail.com'
var email_subject = 'Mailgun Demo'
var email_body = 'Greetings from Geeksforgeeks'

// user defined function to send email
sendMail(sender_email, receiver_email, email_subject, email_body)