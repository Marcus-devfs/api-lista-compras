const { PurchaseItemModel } = require('../models/index')

class PurchaseItemController {

    list = async (req, res) => {
        const response = await PurchaseItemModel.list();
        res.status(200).send(response)
    }

}
module.exports = new PurchaseItemController();