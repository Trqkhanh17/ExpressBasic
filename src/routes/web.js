const express = require('express');
const router = express.Router();
const { getHomepage, get2, postCreateUser, getCreateUser, postUpdateUserPage, getUpdatePageByID, getDeleteUserPage, postHandleDeleteUser } = require('../controllers/homeController');
//khai báo route
router.get('/', getHomepage);
router.get('/2', get2);
router.get('/create', getCreateUser)
router.get('/update/:id', getUpdatePageByID)
router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUserPage);
router.post('/delete-user/:id', getDeleteUserPage);
router.post('/delete-user', postHandleDeleteUser);
module.exports = router; //export defaule