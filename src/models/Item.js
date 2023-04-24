const db = require('../helpers/dataBase/dataBase')

let name_db = "lista_compras"

class ItemModel {
    list = async () => {
        const query = `SELECT * FROM ${name_db}.item`
        const response = await db.execute(query)
        return response
    }
}

module.exports = new ItemModel();