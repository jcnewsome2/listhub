var authController=require("../controllers/authcontroller.js");
module.exports = function(app,passport)
{
	 app.get('/signup', authController.signup);
 
	 app.get('/login',authController.login);

	 app.get('/', authController.home);

	 app.get('/mygroups', authController.myGroups)

	 app.get('/groups', authController.groups)

	  app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signup'
        }
    ));
}