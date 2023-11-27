const { check, body, validationResult } = require('express-validator');

const validateId = [
    check('id').notEmpty().withMessage('ID is required').isInt().withMessage('ID must be an integer')
];

const validateBodyPost = [
    body('first_name').isString().notEmpty(),
    body('last_name').isString().notEmpty()
]

module.exports = {
    validateId,
    validateBodyPost
}