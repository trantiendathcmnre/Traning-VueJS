

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [{
      title: 'Designing Across Senses',
      isbn: '9781491954249',
      total: 10,
      productionYear: 2021,
      categoryId: 2,
      cover: 'https://itbook.store/img/books/9781491954249.png',
      author: 'Christine Park, John Alderman',
      description: 'A Multimodal Approach to Product Design',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Web Scraping with Python, 2nd Edition',
      isbn: '9781491985571',
      total: 100,
      productionYear: 2021,
      categoryId: 3,
      cover: 'https://itbook.store/img/books/9781491985571.png',
      author: 'Ryan Mitchell',
      description: 'Collecting More Data from the Modern Web',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Programming iOS 11',
      isbn: '9781491999226',
      total: 100,
      productionYear: 2021,
      categoryId: 1,
      cover: 'https://itbook.store/img/books/9781491999226.png',
      author: 'Matt Neuburg',
      description: 'Dive Deep into Views, View Controllers, and Frameworks',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Securing DevOps',
      isbn: '9781617294136',
      total: 5,
      productionYear: 2018,
      categoryId: 3,
      cover: 'https://itbook.store/img/books/9781617294136.png',
      author: 'Julien Vehent',
      description: 'An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team\'s highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
