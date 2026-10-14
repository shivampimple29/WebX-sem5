const express = require ('express')
const { handleGetAllUsers, handleCreateUsers, handleUpdateUsingPut, handleUpdateUsingPatch, handleDelete, handleGetUserById } = require('../controller/user')

const router = express.Router ()

router
    .route ('/')
    .get (handleGetAllUsers)
    .post (handleCreateUsers)

// PUT - Update the entire data
// PATCH - Update a fragment

router
    .route ('/:id')
    .get (handleGetUserById)
    .put (handleUpdateUsingPut)
    .patch (handleUpdateUsingPatch)
    .delete (handleDelete)

module.exports = router