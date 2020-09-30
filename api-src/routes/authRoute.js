const router = require('express').Router();
const passport = require('passport');

router.get('/auth/failed', (req,res) => res.send('Failed Log In'))
router.get('/auth/success', (req,res) => res.send('Successful Log In '))

// auth with google+
router.get('/auth/google',(req, res, next)=> {
  next();
},passport.authenticate('google',{
  scope:['profile','email']
}));

router.get('/auth/google/callback', 
  passport.authenticate('google', {failureRedirect: process.env.failureURL}),
  function(req, res) {
    console.log(req.user);
    res.redirect(process.env.successURL+'?email='+req.user._json.email);
});

module.exports = router;