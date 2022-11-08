module.exports = (sequelize, Sequelize) => {
    const Bienes = sequelize.define("bienes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      articulo: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      usuario_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return Bienes;
  };