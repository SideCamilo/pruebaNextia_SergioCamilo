const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Bienes = db.bienes;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.getBienes = (req, res) => {
    Bienes.findAll({
    where: {
        id: req.body.idArticulo,
        usuario_id: req.body.idUser
      }
    })
      .then(bienes => {
        if (!bienes) {
          return res.status(404).send({ message: "No hay bienes" });
        }
        
        res.status(200).send(bienes);
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};

exports.registerBienes = (req, res) => {
    if (req.body.articulo === "" || req.body.descripcion === "") {
        res.send({ message: "Alguno de los campos esta vacio" });
        return;
    }
    Bienes.create({
        articulo: req.body.articulo,
        descripcion: req.body.descripcion,
        usuario_id: req.userId
    })
    .then(bienes => {
        console.log(bienes);

        res.status(200).send({ message: "exito al registrar" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};

exports.updateBienes = (req, res) => {
    Bienes.update({
        articulo: req.body.articulo,
        descripcion: req.body.descripcion
    }, {
        where: {
            id: req.body.idToUpdate
        }
    })
    .then(bienes => {
        if (!bienes) {
          return res.status(404).send({ message: "No hay bienes" });
        }
        
        res.status(200).send(bienes);
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};

exports.deleteBienes = (req, res) => {
    Bienes.destroy({
    where: {
        id: req.body.idArticulo
      }
    })
      .then(bienes => {
        if (!bienes) {
          return res.status(404).send({ message: "No hay bienes" });
        }
        
        res.sendStatus(200);
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};