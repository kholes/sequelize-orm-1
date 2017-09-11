'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
              len: {
                    args: [6, 128],
                    msg: "Email address must be between 6 and 128 characters in length"
              },
              isEmail:{
                    msg: "Email address must be valid"
              },
              isUnique: function (value, next) {
                // var self = this;
                Student.find({where: {email: value}})
                  .then(function (student) {
                    // console.log(student)
                    if (student) {
                      return next('Email already in use!');
                    }
                    return next();
                  })
                  .catch(function (err) {
                    return next(err);
                  });
              }
            }
          }

  });
  Student.prototype.getFullName = function(){
    return this.first_name+' '+this.last_name;
  }
  return Student;
};
