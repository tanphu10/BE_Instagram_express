import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class friends extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    friend_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    friend_two: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    friend_one: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_add_fr: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'friends',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "friend_id" },
        ]
      },
    ]
  });
  }
}
