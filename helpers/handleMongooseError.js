const handleMongooseError = (error, data, next) => { //for add correct status for error
    error.status = 400
    next()
}

module.exports = handleMongooseError
