const db = require('../helpers/dataBase/dataBase')

let name_db = "lista_compras"

class PurchaseItemModel {
    list = async () => {
        const query = `SELECT * FROM ${name_db}.compra_itens`
        const response = await db.execute(query)
        return response
    }
}

module.exports = new PurchaseItemModel()