const connection = require('../config/database');
const { getAllUsers, getUserByID, createNewUser, updateUserByID, deleteUserByID } = require('../services/CRUDServices');
const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { ListUsers: results })
}
const get2 = (req, res) => {
    // Gọi view mà không cần phần mở rộng .ejs
    res.render('sample.ejs');
}
const getCreateUser = (req, res) => {
    res.render('create.ejs')
}
//funcion create a user
const postCreateUser = async (req, res) => {
    await createNewUser(req)
    res.redirect('/');

}
const getUpdatePageByID = async (req, res) => {
    let user = await getUserByID(req);
    res.render('edit.ejs', { userEidt: user });
}
const postUpdateUserPage = async (req, res) => {
    await updateUserByID(req)
    //quay lại trang home 
    res.redirect('/')
}
const getDeleteUserPage = async (req, res) => {
    let user = await getUserByID(req);
    res.render('delete.ejs', { userDelete: user });
}
const postHandleDeleteUser = async (req, res) => {
    await deleteUserByID(req);
    res.redirect('/')
}
module.exports = {
    getHomepage,
    get2,
    postCreateUser,
    getCreateUser,
    postUpdateUserPage,
    getUpdatePageByID,
    getDeleteUserPage,
    postHandleDeleteUser
}