// imports
const express = require('express');
const { taskModel, taskValidationSchema } = require('../model/taskModel');
const { validationResult } = require('express-validator');


// initialization
const router  = express.Router();


router.get('/', async (request, response) => {
    const tasks = await taskModel.find({});
    return response.status(200).json({statusCode : 200, tasks, totalLength : tasks.length})
})

router.get('/:id', async (request, response) => {
    const blog = await taskModel.findById(request.params.id)
    return response.status(200).json(blog);
})

router.post('/', taskValidationSchema,  async (request, response) => {
    console.log('request.body', request.body)
    let validation = validationResult(request);
    if (!validation.isEmpty())
    return response
      .status(400)
      .json({ statusCode: 400, error: validation.array() });
    
    const taskCreated = await taskModel.create(request.body);
    if(!taskCreated)
        return response.status(500).json({statusCode: 500, error : "Internal Server Error"});
    return response.status(200).json({statusCode: 200, taskCreated});
})

router.put('/:id',  async (request, response) => {
    const taskUpdated = await taskModel.findOneAndUpdate({_id : request.params.id}, request.body, {
        new : true
    });
    if(!taskUpdated)
    return response.status(500).json({statusCode: 500, error : "Internal Server Error"});
    return response.status(200).json({statusCode: 200, taskUpdated});
})

router.delete('/:id',  async (request, response) => {
    const taskDeleted = await taskModel.findByIdAndDelete(request.params.id);
    const tasks = await taskModel.find({})
    if(!taskDeleted)
    return response.status(500).json({statusCode: 500, error : "Internal Server Error"});
    return response.status(200).json({statusCode : 200, tasks, totalLength : tasks.length})
})

module.exports = router;