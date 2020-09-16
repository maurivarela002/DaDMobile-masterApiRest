const { Router } = require('express');
const router = Router();

const { getUsers, createUsers, getUserById } = require('../controllers/index.controller');

router.get('/UserAdmin', getUsers );
router.get('/UserAdmin:UserID', getUserById);
router.post('/NewUserAdmin', createUsers);

module.exports = router;