const { isValidObjectId } = require("mongoose")

const { HttpError } = require("../helpers")

const isValidId = (req, res, next) => { //if format of id wrong mongoose return right status
    const { id } = req.params
    if (!isValidObjectId(id)) {
        next(HttpError(400, `${id} is not valid`))
    }
    next()
}

module.exports = isValidId