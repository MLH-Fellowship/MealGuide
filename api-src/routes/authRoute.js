const router = require('express').Router();
const passport = require('passport');
const keys = require('../config/ids');

router.get('/auth/failed', (req,res) => res.send('Failed Log In'))
router.get('/auth/success', (req,res) => res.send('Successful Log In '))

// auth with google+
router.get('/auth/google',(req, res, next)=> {
  next();
},passport.authenticate('google',{
  scope:['profile','email']
}));

router.get('/auth/google/callback', 
  passport.authenticate('google', {failureRedirect: keys.url.failureURL}),
  function(req, res) {
    console.log(req.user);
    res.redirect(keys.url.successURL+'?email='+req.user._json.email);
});


module.exports = router;