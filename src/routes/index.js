const routes = require('express').Router()
const { UserController, PurchaseController, PurchaseItemController, ItemController } = require('../controllers/index')

//users
routes.get('/users', UserController.list)
routes.post('/users/login', UserController.login)

//Purchases
routes.get('/purchase', PurchaseController.list)

//PurchaseItems
routes.get('/purchaseItem', PurchaseItemController.list)

//Items
routes.get('/items', ItemController.list)

module.exports = routes