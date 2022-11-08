const { authJwt } = require("../middleware");
const controller = require("../controllers/bienes.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.get(
    "/api/bienes",
    [authJwt.verifyToken],
    controller.getBienes
  );

  app.post(
    "/api/bienes/register",
    [authJwt.verifyToken],
    controller.registerBienes
  );

  app.put(
    "/api/bienes/update",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.updateBienes
  );

  app.delete(
    "/api/bienes/delete",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteBienes
  );
};