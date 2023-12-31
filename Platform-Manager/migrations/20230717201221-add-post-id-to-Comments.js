'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Comments", "postId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Posts",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Comments", "postId");
  }
};