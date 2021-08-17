const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateGoalInput(data) {
    let errors = {};

    data.category = validText(data.category) ? data.category : '';
    data.title = validText(data.title) ? data.title : '';
    data.description = validText(data.description) ? data.description : '';

    if (!Validator.isLength(data.category, { min: 5, max: 50 })) {
        errors.category = 'Category must be at least 5 characters long';
    }
 
    if (Validator.isEmpty(data.category)) {
        errors.category = 'Category field is required';
    }

    if (!Validator.isLength(data.title, { min: 5, max: 50 })) {
        errors.title = 'Title must be at least 5 characters long';
    }
 
    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if (!Validator.isLength(data.description, { min: 5, max: 300 })) {
        errors.description = 'Description must be at least 5 characters long';
    }
 
    if (Validator.isEmpty(data.description)) {
        errors.description = 'Description field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};