'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [{
      id: 1,
      name: 'Computers & IT',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 2,
      name: 'Business applications',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 3,
      name: 'Programming',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 4,
      name: 'Software technology',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Categories', [{
      id: 1
    }]);
  }
};
