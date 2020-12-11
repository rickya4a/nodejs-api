const controller = require('./controller/main')
const router = require('express').Router()

// Define routes
router.get('/employees', controller.getEmployees)
router.get('/employees/:id', controller.getSpecEmployees)
router.post('/employees', controller.addEmployee)
router.put('/employees/:id', controller.editEmployee)
router.delete('/employees/:id', controller.deleteEmployee)

router.post('/reverse', controller.reverseString)
router.post('/fibonacci', controller.fibonacci)
router.post('/combination', controller.combination)

module.exports = router