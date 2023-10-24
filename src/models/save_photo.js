import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class save_photo extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    photo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'photos',
        key: 'photo_id'
      }
    },
    date_save: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'save_photo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "photo_id" },
        ]
      },
      {
        name: "photo_id",
        using: "BTREE",
        fields: [
          { name: "photo_id" },
        ]
      },
    ]
  });
  }
}
