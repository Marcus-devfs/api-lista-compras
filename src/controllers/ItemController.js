const { ItemModel } = require('../models/index')

class ItemController {

    list = async (req, res) => {
        const response = await ItemModel.list();
        res.status(200).send(response)
    }

}
module.exports = new ItemController();