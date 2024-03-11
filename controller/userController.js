const User = require('../models/user');

exports.resgisterUser = (req, res) => {
    const {userName, userEmail, userPassword, userPhoneNum, longitude, lattitude} = req.body;

    User.createUser({userName, userEmail, userPassword, userPhoneNum, longitude, lattitude}, (err,user) => {
        if (err) {
            res.status(500).json({message:'Error registring user'});
        }
        else{
            res.status(200).json({message: 'User registed successfully', user});
        }
    });
};

exports.loginUser = (req, res) => {
    const {userEmail, userPassword} = req.body;

    User.getUserUser(userEmail, userPassword, (err,user) => {
        if (err) {
            res.status(500).json({message:'Error Logging in'});
        }
        else if(user){
            res.status(200).json({message: 'Login Successful', user});
        }
        else{
            res.status(401).json({message:'Invalid credentials'});
        }
    });
};