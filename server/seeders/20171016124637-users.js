const bcrypt = require('bcrypt');

'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'admin',
      fullName: 'Abdulrasaq Nasirudeen',
      password: bcrypt.hashSync('admin', 10),
      email: 'admin@gmail.com',
      plan: 'gold',
      isAdmin: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Users', [{
      username: 'admin'
    }]);
  }
};

/* eslint-enable */
