
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },
      password_hash:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  async down (queryInterface) {
    return await queryInterface.dropTable('users');
  }
};

//criar migration: npx sequelize migration:create --name=alunos
// mandar pro banco: npx sequelize db:migrate
//apagar tabela do banco: npx sequelize db:migrate:undo
