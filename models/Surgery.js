module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define(
    'Surgery',
    {
      surgeryId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      speciality: DataTypes.STRING,
      doctor: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Surgeries',
      underscored: true,
    }
  );

  return Surgery;
};
