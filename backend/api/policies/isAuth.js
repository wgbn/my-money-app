const jwt = require('jsonwebtoken')
const SALT = '_wgbn_react_'

module.exports = function(req, res, next) {

    if (req.headers.authorization) {
        jwt.verify(req.headers.authorization, SALT, function (err, decoded) {
            if (err) {
                return res.forbidden('You are not permitted to perform this action.')
            } else {
                req.decoded = decoded
                next()
            }
        })
    }
};
