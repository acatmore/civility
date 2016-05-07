Meteor.startup(function () {
    process.env.MAIL_URL="smtp://[YOUR_EMAIL]@gmail.com:[YOUR_PASSWORD]@smtp.gmail.com:465/";
})