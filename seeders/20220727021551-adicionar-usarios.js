'use strict';
const {encrypt} =require(`../seguranca`)

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { nome: 'John Doe', usuario: 'samara', senha: encrypt('3017') },
      { nome: 'Picolo', usuario: 'picolo', senha: encrypt('123') },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
