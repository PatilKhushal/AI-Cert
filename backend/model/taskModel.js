// imports
const { checkSchema } = require('express-validator');
const mongoose = require('mongoose');

// creating the schema
const taskSchema = mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        status : {
            type : String,
            enum : ['pending', 'in-progress', 'completed'],
            default : 'in-progress'
        },
        due : {
            type : Date,
            required : true
        }
    }
)   

// creating the model
const taskModel = mongoose.model('tasks', taskSchema);

// creating task validation schema
const taskValidationSchema = checkSchema({
    title: {
      in: "body",
      exists: { errorMessage: "Title must be present" },
      isString: true,
      notEmpty: {
        errorMessage: "Title can't be empty",
      },
    },
    description: {
      in: "body",
      exists: { errorMessage: "Description must be present" },
      isString: true,
      notEmpty: {
        errorMessage: "Description can't be empty",
      },
    },
    due: {
      in: "body",
      exists: { errorMessage: "Due Date must be present" },
      isString : true,
      notEmpty: {
        errorMessage: "Due Date can't be empty",
      },
    },
  });

module.exports = {
    taskModel,
    taskValidationSchema
};