const db = require('../helpers/dataBase/dataBase')

let name_db = "lista_compras"

class UserModel {
    list = async () => {
        const query = `SELECT * FROM ${name_db}.users`
        const response = await db.execute(query)
        return response
    }

    login = async (email, password) => {
        const query = `SELECT * FROM ${name_db}.users WHERE email = '${email}' AND senha = '${password}'`
        const response = await db.execute(query);
        return response
    }
}

module.exports = new UserModel();