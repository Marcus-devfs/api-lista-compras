const db = require('../helpers/dataBase/dataBase')

let name_db = "lista_compras"

class PurchaseModel {
    list = async () => {
        const query = `SELECT * FROM ${name_db}.compras`
        const response = await db.execute(query)
        return response
    }
}

module.exports = new PurchaseModel()