const { check, body, validationResult } = require('express-validator');

const validateId = [
    check('id').notEmpty().withMessage('id is required').isInt().withMessage('id must be an integer')
];

const validateBody = [
    body('price').isNumeric().withMessage('price needs to be a number').notEmpty().withMessage('price is required'),
    body('date').isISO8601().withMessage('Invalid date format').notEmpty().withMessage('date is required'),
    body('user_id').notEmpty().withMessage('user_id is required').isInt().withMessage('user_id must be an integer')
]

module.exports = {
    validateId,
    validateBody
}