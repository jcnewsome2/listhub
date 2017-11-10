module.exports = function(sequelize,Sequelize)
{
var User=sequelize.define('user',{

id:{
	autoIncrement:true,
	primaryKey:true,
	type:Sequelize.INTEGER
},
Name:{
type:Sequelize.STRING,
notEmpty:true
},

Password:{
type:Sequelize.STRING,
allowNull:false	
},

Email:{
	type:Sequelize.STRING,
	validate:{
		isEmail:true
	},
	allowNull:true
}


});



return User;
}