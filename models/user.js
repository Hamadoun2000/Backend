const db = require('../config/database');
const bcrypt = require('bcrypt');

class User{
    static createUser(userData, callback){
        const {userName, userEmail, userPassword, userPhoneNum, longitude, lattitude} = userData;

        bcrypt.hash(userPassword, 10, (err, hash) => {
            if(err){
                callback(err, null);
            }
            else{
                const insertUserQuery ='INSERT INTO `users`(`user_name`, `user_email`, `user_password`, `user_phone_num`, `longitude`, `lattitude`) VALUES (?,?,?,?,?,?)';
                db.query(insertUserQuery, [userName, userEmail, hash, userPhoneNum, longitude, lattitude], (err, result)=> {
                    if(err){
                        callback(err, null);
                    }
                    else{
                        callback(null, result);
                    }
                });
            }
        });
    }
    static getUser(email, password, callback){
        const getUserQuery = 'SELECT * FROM `users` WHERE ?';
        db.query(getUserQuery, [email], (err, result) => {
            if(err){
                callback(err, null);
            }
            else if(result.length > 0){
                const user = results[0];
                bcrypt.compare(password, user.user_password, (err, result) => {
                    if(result){
                        callback(null, user);
                    }else{
                        callback(null, null);
                    }
                });
            }
            else{
                callback(null, null);
            }
        });
    }
}
module.exports = User;