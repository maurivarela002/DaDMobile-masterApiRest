const { Pool } = require('pg');

//Conexion con postgres mediante Pool
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'DiarioAdiario'
});

//metodo GET, es decir trae los usuarios, lo usaremos para verificar que funcione la conexion
const getUsers = async (req, res) =>{
    const response = await pool.query('SELECT * FROM UserAdmin')
    res.status(200).json(response.rows);
};

//metodo post, es decir postea usuarios
const createUser = async (req, res) =>{
    const {LoginName, Email } = req.body;

    const response =  await pool.query('INSERT INTO UserAdmin (LoginName , Email) VALUES ($1, $2)', [LoginName, Email]);
    console.log(response);
    res.json({
        message: 'Usuario agregado correctamente!',
        body: {
            UserAdmin: {LoginName,Email}
        }
    })
}

const getUserById = async (req, res) =>{
    const UserID = req.params.UserID;
    const response = await pool.query('SELECT * UserAdmin WHERE UserID = $1', [UserID]);
    res.json(response.rows);
}

  module.exports={
      getUsers,
      createUser,
      getUserById
  }