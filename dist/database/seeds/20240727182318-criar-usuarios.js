"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// const bcryptjs = require('bcryptjs');
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
      await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'luiz1',
          email: 'luiz1@gmail.com',
          password_hash: await _bcryptjs2.default.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'luiz2',
          email: 'luiz2@gmail.com',
          password_hash: await _bcryptjs2.default.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'luiz3',
          email: 'luiz3@gmail.com',
          password_hash: await _bcryptjs2.default.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      {},
    );
  },
  async down () {
  }
};

// criar seeds: npx sequelize seed:generate --name criar-usuarios
//npx sequelize db:seed:all
