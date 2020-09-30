var clientid = process.env.clientID;
var clientSecret = process.env.clientSecret;
var successURL = 'http://mealguide.tech/suggestions';
var failureURL = 'http://mealguide.tech';
module.exports = {
    google: {
      clientID: clientid,
      clientSecret: clientSecret
    },
    url: {
        successURL: successURL,
        failureURL: failureURL
    }
};