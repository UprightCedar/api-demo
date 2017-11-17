/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STORE_USER', {
    USER_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    OPENID: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    USER_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    USER_TEL: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    USER_SEX: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: 'M'
    },
    USER_HEAD_IMG: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    USER_INTEGRAL: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    INVENTION_CODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    INVENTION_QRCODE: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    UPDATE_USER: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UPDATE_TIME: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    USER_PASSWORD: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PAY_PASSWORD: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MEMBER_CARD_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER_LEVEL: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    REGISTER_TIME: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'STORE_USER',
    timestamps: false
  });
};
