const { Router } = require('express');
const router = Router();

const { getUsers, getUserById, createUser, loginUser } = require('../controllers/index.controller');

router.get('/users', getUsers );
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.post('/users', loginUser)

module.exports = router;