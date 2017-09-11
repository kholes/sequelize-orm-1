'use strict';
module.exports = function(sequelize, DataTypes) {
  var Conjunction = sequelize.define('Conjunction', {
    SubjectId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER
  });
  Conjunction.associate=function(models){
    Conjunction.belongsTo(models.Subject)
    Conjunction.belongsTo(models.Subject)
  }
  return Conjunction;
};
