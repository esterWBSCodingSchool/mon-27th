const { check, body, validationResult } = require('express-validator');

const validateId = [
    check('id').notEmpty().withMessage('ID is required').isInt().withMessage('ID must be an integer')
];

const validateBody = [
    body('first_name').isString().notEmpty().withMessage('first_name is required'),
    body('last_name').isString().notEmpty().withMessage('last_name is required')
]

module.exports = {
    validateId,
    validateBody
}