const connection = require('../config/database');
//select all Users
const getAllUsers = async () => {
    let [results, fields] = await connection.query(`SELECT *FROM Users`);
    return results;
}
//select user by id
const getUserByID = async (req, res) => {
    const userID = req.params.id
    let [results, fields] = await connection.query(`SELECT *FROM Users WHERE id = ?`, [userID]);
    console.log(results);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}
const createNewUser = async (req, res) => {
    let { name, email, city } = req.body;
    const [results, fields] = await connection.query(
        `INSERT INTO Users(name,email,city)
         VALUES(?,?,?)`, [name, email, city]
    );
    return results;
}
const updateUserByID = async (req, res) => {
    let { userId, name, email, city } = req.body;
    const [results, fields] = await connection.query(
        `UPDATE Users SET name = ?,email = ?,city = ? WHERE id = ?`, [name, email, city, userId]
    );
}
const deleteUserByID = async (req, res) => {
    let userID = req.body.id;
    const [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`, [userID]
    );
}
module.exports = {
    getAllUsers,
    getUserByID,
    createNewUser,
    updateUserByID,
    deleteUserByID
}