const { PurchaseModel } = require('../models/index')

class PurchaseController {

    list = async (req, res) => {
        const response = await PurchaseModel.list();
        res.status(200).send(response)
    }

}
module.exports = new PurchaseController();