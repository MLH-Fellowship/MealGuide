const router = require('express').Router();
const passport = require('passport');

router.get('/auth/failed', (req,res) => res.send('Failed Log In'))
router.get('/auth/success', (req,res) => res.send('Successful Log In '))

// auth with google+
router.get('/auth/google',(req, res, next)=> {
  next();
},passport.authenticate('google',{
  scope:['profile','email', 'https://www.googleapis.com/auth/user.gender.read','https://www.googleapis.com/auth/user.birthday.read']
}));

router.get('/auth/google/callback', 
  passport.authenticate('google', {failureRedirect: process.env.failureURL+'?auth=false'}),
  function(req, res) {
    if(req.user.isPresent)
    res.redirect(process.env.successURLsuggest+'?email='+req.user._json.email+'&auth=true');
    else
    res.redirect(process.env.successURLnewuser+'?email='+req.user._json.email+'&auth=true');
});

module.exports = router;