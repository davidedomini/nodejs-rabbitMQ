module.exports = (app) => {
    var controller = require('../controllers/controller.js')

    app
        .route('/sendMessage')
        .post(controller.sendMessage)

    app
        .route('/sendReset')
        .post(controller.sendReset)
}