const { Router } = require('express');
const validateJWT = require('../auth/validateJWT');
const { PostController } = require('../controller');
const { validationPost } = require('../middlewares/validation.middleware');

const postRouter = Router();

postRouter.post('/', validationPost, validateJWT, PostController.insertCategoryController);

module.exports = postRouter;