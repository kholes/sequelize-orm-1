'use strict';
// let Subject = require('subject.js');
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    SubjectId: DataTypes.INTEGER
    // {
    //   type: DataTypes.STRING,
    //         allowNull: false,
    //         validate:
    //         {
    //           len: {
    //                 args: [6, 128],
    //                 msg: "Email address must be between 6 and 128 characters in length"
    //           },
    //           isEmail:{
    //                 msg: "Email address must be valid"
    //           },
    //           isUnique: function (value, next) {
    //             Teacher.find({where: {email: value}})
    //               .then(function (teacher) {
    //                 if (teacher) {
    //                   return next('Email already in use!');
    //                 }
    //                 return next();
    //               })
    //               .catch(function (err) {
    //                 return next(err);
    //               });
    //           }
    //         }
    //       },

  });
  Teacher.associate = function(models){
    Teacher.belongsTo(models.Subject)
  }
  return Teacher;
};
