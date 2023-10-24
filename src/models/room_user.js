import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class room_user extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'room_chat',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'room_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "room_id",
        using: "BTREE",
        fields: [
          { name: "room_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
