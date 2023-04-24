const { UserModel } = require('../models/index')

class UserController {

    list = async (req, res) => {
        const response = await UserModel.list();
        res.status(200).send(response)
    }

    login = async (req, res) => {

        const { userData } = req.body
        try {
            const response = await UserModel.login(userData.email, userData.password);
            res.status(200).send(response)
        } catch (error) {
            res.status(500).send(error)
        }
    }

}
module.exports = new UserController();